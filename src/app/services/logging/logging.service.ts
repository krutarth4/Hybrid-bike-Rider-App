
import { Injectable, OnDestroy } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LogEvent, Logger, LogLevel, getPrimaryLoggerTransport, stringifyLogEvent } from '@obsidize/rx-console';
import { CordovaFileEntryApi, RotatingFileStream } from '@obsidize/rotating-file-stream';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { buffer, concatMap } from 'rxjs/operators';
import { fromEventPattern, interval, Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

const targetLogLevel = environment.production ? LogLevel.DEBUG : LogLevel.VERBOSE;

getPrimaryLoggerTransport()
  .setFilter(ev => ev.level >= targetLogLevel)
  .setDefaultBroadcastEnabled(!environment.production);

function compareLastModifiedTime(a: CordovaFileEntryApi, b: CordovaFileEntryApi): number {
  return a.getLastModificationTime() - b.getLastModificationTime();
}

@Injectable({
  providedIn: 'root'
})

  /**
   * This is for logging information ! TODO:
   */
export class LoggingService implements OnDestroy {

   logger
filestream: RotatingFileStream<CordovaFileEntryApi>

  private  fileStream: RotatingFileStream<CordovaFileEntryApi> = new RotatingFileStream({
    maxFileSize: 2e6, // 2MB
    files: CordovaFileEntryApi.createCacheRotationFiles(
      this.cdvFile,
      "log",
      ['debuga.log', 'debugb.log']
    )
  });
  start() {


    this.logger = new Logger('LogManagerService');
    
    this.fileStream = new RotatingFileStream({
      maxFileSize: 2e6, // 2MB
      files: CordovaFileEntryApi.createCacheRotationFiles(
        this.cdvFile,
        this.cdvFile.externalApplicationStorageDirectory,
        ['debug-a.log', 'debug-b.log']
      )
    });
    this.cdvFile.writeFile(this.cdvFile.externalApplicationStorageDirectory,
      "logmanager.log", "", { replace: true })
      .then((data) => {
        console.log("successful", data)
      }, (error) => {
        console.error("saving file cordova", error)
      })
    


    
  }

  private mFileStreamSub: Subscription | undefined;

  constructor(
    private  platform: Platform,
    // private readonly socialSharing: SocialSharing,
    private cdvFile: File,
  ) {
   /*  try {
      console.log("---------------------------------------------")
       this.platform.ready().then(() => {
        // this.cdvFile.ready
        
        console.log("directory", this.cdvFile.applicationStorageDirectory);
        this.start();
        this.cdvFile.writeFile(this.cdvFile.externalApplicationStorageDirectory,
          "debuga.log", "", { replace: true })
          .then((data) => {
            console.log("successfuldebuga", data)
          }, (error) => {
            console.error("saving file cordova", error)
          })
        this.cdvFile.writeFile(this.cdvFile.externalApplicationStorageDirectory,
          "debugb.log", "", { replace: true })
          .then((data) => {
            console.log("successfuldebugb", data)
          }, (error) => {
            console.error("saving file cordova", error)
          })
      })
      
    } catch (error) {
      console.error("dir",this.cdvFile.applicationStorageDirectory)
    } */

  }

  public ngOnDestroy(): void {
    this.clearFileStreamSub();

  }

  private clearFileStreamSub(): void {
    // We don't really care if this doesn't work, since the only two ways this will explode are:
    // 1. there is no assigned subscription instance
    // 2. the subscription instance is already unsubscribed
    try { this.mFileStreamSub?.unsubscribe(); } catch { }
  }

  // Example for sharing log files via the share plugin
  /* public async shareLogsViaEmail(): Promise<void> {

    this.logger.debug('shareLogsViaEmail()');
    const files = await this.fileStream.refreshAllEntries();
    const logFilePaths = files.map(file => file.toURL());
    this.logger.debug('opening email with file attachments: ', logFilePaths);

    await this.socialSharing.share(
      'New App Logs Attached',
      '[' + environment.appId + '] App Logs',
      logFilePaths
    );
  } */

  // Example for smashing log files together to be uploaded somewhere
  public async combineLogs(): Promise<string> {

    this.logger.debug('combineLogs()');
    const files = (await this.fileStream.refreshAllEntries()).sort(compareLastModifiedTime);
    let result = '';

    for (const file of files) {
      const buffer = await file.read();
      const text = new TextDecoder().decode(buffer);
      result += `\n__FILE_BREAK__---------- ${file.getFileName()} ----------__FILE_BREAK__\n`;
      result += text;
    }

    return result;
  }

  public async initialize(): Promise<void> {
    this.platform.ready().then(() => {

    this.logger.debug('initialize()');

    if (!this.platform.is('cordova')) {
      return;
    }

    this.clearFileStreamSub();

    this.mFileStreamSub = getPrimaryLoggerTransport()
      .events()
      .asObservable<Observable<LogEvent>>(fromEventPattern)
      .pipe(

        // Accumulate log events for 5 seconds
        buffer(interval(5000)),

        // NOTE: typically we would do event handling in the subscribe block,
        // but we can only write to files one-at-a-time, so we put the actual subscribe logic in concatMap() instead.
        concatMap(events => this.saveLogEvents(events).catch(e => {
          this.logger.fatal('log file write FATAL: ', e);
        }))

        // Activate this subscription to start recieving events.
      ).subscribe();
      
    })

  }

  private async saveLogEvents(events: LogEvent[]): Promise<void> {
    this.logger.verbose("savingfile"+ this.cdvFile)

    // Don't do anything if there are no new events
    if (!events || events.length <= 0) {
      return;
    }

    // Combine the buffered events to a string payload
    // (need to tack on a newline at the end since join doesn't do that)
    const outputText = `${events.map(stringifyLogEvent).join('\n')}\n`;

    // Encode the string as an ArrayBuffer
    const outputBuffer = new TextEncoder().encode(outputText).buffer;

    // Write the encoded content to the RotatingFileStream instance.
    // NOTE: the stream will handle file swapping in the background, so we don't have to handle that part directly.
    await this.fileStream.write(outputBuffer).then((res) => {
      console.warn("filewritten", res)
    }, (error) => {
      console.error("saving filestream", error)
    })


  /*   this.cdvFile.writeFile(this.cdvFile.externalApplicationStorageDirectory,
      "logmanager.log", outputBuffer, { append: true })
      .then((data) => {
        console.log("successful", data)
      }, (error) => {
        console.error("saving file cordova", error)
      }) */
    
    // await this.fileStream.rea
    
  }
}