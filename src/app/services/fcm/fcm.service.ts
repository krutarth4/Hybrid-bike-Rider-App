import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FCM } from 'plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  token: string;
  pushPayload;

  private fcm_message_broker = new BehaviorSubject<any>('undefined');
  _fcm_observer = this.fcm_message_broker.asObservable();


  constructor(
    private platform: Platform,
    private fcm : FCM

  
  
  ) { }




/**
 * it setup the FCM messaging for the mobile 
 * Notification : It adds the subscription on the global level 
 * @returns {void} 
 */
  private async setupFCM() {
    console.log("__________FCM sittings_________");

    
    await this.platform.ready();
    console.log('FCM setup started');
    if (!this.platform.is('cordova')) {
      return;
    }

    console.log('Subscribing to token updates');
    
  /*   this.hasPermission = await this.fcm.requestPushPermission();
    console.log('requestPushPermission result: ', this.hasPermission);
 */
    this.token = await this.fcm.getToken();

    console.log('getToken result: ', this.token);

    let notification = await this.fcm.onNotification().subscribe((data) => {
      console.log("FCM data", data)
      this.fcm_message_broker.next(data); // shares the new message payload
    }, (error) => {
      console.error("error with fcm subscription");
    })
    this.pushPayload = await this.fcm.getInitialPushPayload();
    console.log('getInitialPushPayload result: ', this.pushPayload);
    // resolve(this.token)
    return Promise.resolve(this.token)
  }
}
