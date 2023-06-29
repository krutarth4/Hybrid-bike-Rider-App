import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
  
  // ! future implementation use slack for real time monitoring: -> https://medium.com/dailyjs/how-to-send-errors-into-slack-dc552e30506f
export class ErrorloggingService {

  constructor() { }

  logError(message: string, stack: string) {
    // Send errors to be saved here
    // The console.log is only for testing this example.
    console.log('LoggingService: ' + message);
  }
}
