import { Injectable } from "@angular/core";
import { Vibration } from "@awesome-cordova-plugins/vibration/ngx";
import { ToastController } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";
import { AlertControlService } from "../alertControl/alert-control.service";

@Injectable({
  providedIn: "root",
})
export class OutputControllerService {
private checkpointalert= new BehaviorSubject<any>('undefined')

  _cast_checkpoint_alert = this.checkpointalert.asObservable()
private swarmalert= new BehaviorSubject<any>('undefined')

  _cast_swarm_alert = this.swarmalert.asObservable()
  
  /**
   * This service will provide hard coded outhandler for all the outputs for example : join swarm , create swarm , left swarm , and for the alerts for checkpoint
   */
  // TODO : set priority of the alerts as in destination reached priority 1, swarm information priority 2 , navigation information priority 3

  toasts = [];
  alerts = [];
  constructor(
    public alertService: AlertControlService,
    private vibration: Vibration,
    private toastCtrl: ToastController
  ) {}

  /**
   * ! swarm events -> bottom part swarm information as toast
   * category 3
   * Join swarm :
   * Leave swarm :
   * someone joined swarm :
   * someone left the swarm :
   *
   * ! checkpoint alerts -> screen middle to show the information for alerts
   * meetcheckpointAlert :  category 1
   * leavecheckpointAlert: category 1
   * innercheckpointAlert: category 2
   * destinationReached : category 3
   *
   * ! Navigation information -> top bar reserved to show navigational information
   * category 1
   * navigationalInformation: category 1
   */

  /**
   *  main goal of the function is to manage the multiple alerts happening within the occurence of one
   * @depreceated As alerts and toast control has been removed ferom the app 
   * @param header header for the alert message
   * @param message message to show
   * @param button buttons availabel
   * @param duration duration for which the alert should be shown
   */

  alertManager(header, message, button, duration, category?) {
    // add alert in the stack
    let alertObj = {
      header: header,
      message: message,
      button: button,
      duration: duration,
      id: category,
    };
    this.alerts.push(alertObj);
    // sort the array on their priority
    this.alerts.sort((data, data2) => {
      if (data.id > data2.id) {
        return 1;
      } else if (data.id < data2.id) {
        return -1;
      } else {
        return 0;
      }
    });
    setTimeout(() => {
      this.alertService.getAlert().then((data: any) => {
        let obj = this.alerts.pop();
        // no alert present
        if (data == undefined) {
          console.log("No current alert present");
          this.alertService.generateAlert(
            obj.header,
            obj.message,
            obj.button,
            obj.duration,
            obj.id
          );
        } else if (data.id > obj.id) {
          //  lower priority alerts 
          // then dont show the alert 
          console.log("NO NEED TO DIMISS OR SHOW THE INFO")

        } else if (data.id < obj.id) {
          // High priority alert
          // dismiss the alert
          this.alertService.alertDismiss().then((result) => {
            if (result) {
              // empty the alert list 
              this.alerts = []
              // create new alert 
              this.alertService.generateAlert(obj.header, obj.message, obj.button, obj.duration, obj.id)
              
            } else {
              console.error("NOT able to delet the top overlay")
            }
          }, (error) => {
            console.error("Unable to call Dismiss on alert ")
          });
          // create the new alert 
        } else if (data.id == obj.id) {
          
          
          // same priority alerts
          // show the updated alert or the newest one
          // dismiss the old alert
          this.alertService.alertDismiss().then((result) => {
            if (result) {
              // empty the alert list 
              this.alerts =[]
              // create the new alert
              this.alertService.generateAlert(obj.header, obj.message, obj.button, obj.duration, obj.id)
              
            } else {
              console.log("NOT able to delete the top overlay")
            }
          }, (error) => {
            console.error("Unable to call Dismiss on alert ", error)
          });
          
        }

      });
    }, 200);

    // this.alertService.getAlert()
  }

  /**
   *
   * @param e it is a kind of event which occured
   * @param alertMessage it is a custom message for user to be shown on the screen
   */
  genereateOutput(e: string, alertMessage?: string) {
    switch (e) {
      // events joining swarm
      // for creating swarm from events

      case "joinSwarm": {
        this.alertManager_swarm("You joined the swarm",5000);
        this.vibration.vibrate([2000, 1000, 2000]);

        break;
      }
      // Someone joined the swarm
      case "userJoinedSwarm": {
        this.alertManager_swarm("Someone joined swarm",5000);

        this.vibration.vibrate([1000]);
        break;
      }
      // events leave swarm
      case "leaveSwarm": {
        this.alertManager_swarm("You left the swarm",5000);
        this.vibration.vibrate([4000]);

        break;
      }
      case "userLeftSwarm": {
        this.alertManager_swarm("Someone left the swarm ",5000);
        this.vibration.vibrate([4000]);
        break;
      }
      // checkpoint alert or all the navigational alerts cases will be specified here
      case "meetcheckpointAlert": {
        /* this.alertManager(
          "Checkpoint alert",
          alertMessage,
          "OK",
          5000,
          1
        ); */

        this.alertManager_checkpoint(alertMessage, 5000)
        break;
      }
      case "leavecheckpointAlert": {
        /* this.alertManager(
          "Checkpoint alert",
          alertMessage,
          "OK",
          5000,
          1
        ); */
        this.alertManager_checkpoint(alertMessage, 5000)

        break;
      }
      // destination alert
      case "destinationReached": {
        /* this.alertManager(
          "Destination Alert",
          alertMessage,
          "OK",
          5000,
          3
        ); */
        this.alertManager_checkpoint(alertMessage, 5000)
        break;
      }
      // inner geofence reached for both leave and meet checkpoint
      case "innercheckpointAlert": {
        /* this.alertManager(
          "Checkpoint Alert",
          alertMessage,
          "OK",
          5000,
          2
        ); */
        this.alertManager_checkpoint(alertMessage, 5000)
        this.vibration.vibrate([3000]);
        break;
      }
      case "navigationalInformation": {
        // here the navigational information will be added

        break;
      }
      default: {
        //statements;

        console.error("No specified output found for the string ", e);
        break;
      }
    }
  }


  alertManager_checkpoint(alertmessage: string, timeToDisplay) {
    
    this.checkpointalert.next(alertmessage);
    setTimeout(() => {
      this.checkpointalert.next("undefined")
      
    }, (timeToDisplay));
    
  }
  alertManager_swarm(alertmessage: string, timeToDisplay) {
    
    this.swarmalert.next(alertmessage);
    setTimeout(() => {
      this.swarmalert.next("undefined")
      
    }, (timeToDisplay));
    
  }
/**
 * 
 * 
 * @param msg message to be shown
 * @param color color of the toast
 * @param duration display time 
 */
  generateToast(msg, color?, duration?) {
    console.log("from toast", msg);
    const toast = {
      message: msg,
      color: color || "dark",
      duration: duration || 5000,
    };
    this.toasts.push(toast);
    const timeout = (this.toasts.length - 1) * toast.duration;
    this.show(timeout);
  }
  show(timeout) {
    setTimeout(
      async () => {
        const toast = await this.toastCtrl.create(this.toasts[0]);
        await toast.present();
        this.toasts.splice(0, 1);
      },
      timeout > 0 ? timeout + 800 : 0
    );
  }

  /*  
  // focussed more on wearbale  
  ! important for wearable
  
  add_in_priority(message: string, priority:number) {
    if (priority <= 1.9) {
      this.HighPriority.push(message)
      
      
    } else if (priority >= 2 && priority <= 2.9) {
      this.MediumPriority.push(message)
      
    } else {
      // everything with priority <= 3
      
      this.LowPriority.push(message)
    }

    // subscribe to the main thread 
    if (this.HighPriority.length != 0) {
      // remove all other information from other priorities
      this.clearAll(this.MediumPriority);
      this.clearAll(this.LowPriority)

    }


  } 
  // it helps to create one signal from all the above priority lists  and updates the mainThread content 
   generateOneSignal() {
    let currentPriority = this.MainThread.contentPriority
    let HighestPriority: number;
    let HighestPriorityContent :string
    if (this.HighPriority.length != 0) {
      HighestPriority = 1
      HighestPriorityContent = this.HighPriority.pop()
    } else if (this.MediumPriority.length != 0) {
      HighestPriority = 2
      HighestPriorityContent = this.MediumPriority.pop()
    } else if (this.LowPriority.length != 0) {
      HighestPriority = 3
      HighestPriorityContent = this.LowPriority.pop()
    } else {
      HighestPriority = 0
      HighestPriorityContent = ''
    }
// when current priority is higer priority than the new event
    if (currentPriority < HighestPriority) {
      // wait for the current content to finish 
      if (currentPriority ==1 ) {
        // remove all other information from other priorities
        this.clearAll(this.MediumPriority);
        this.clearAll(this.LowPriority)
        this.MainThread.content = HighestPriorityContent
        this.MainThread.contentPriority = HighestPriority
        this.MainThread.stack.splice(0,this.MainThread.stack.length-1)
  
      } else if (currentPriority == 2) {
        // we dont haver to clear lowpriority array as after finishing medium priority we have to continue with low priority
        this.MainThread.content = HighestPriorityContent;
        this.MainThread.contentPriority = HighestPriority;
        this.MainThread.stack.push(this.MainThread) // to generate output later 
      }



    } else if (currentPriority > HighestPriority) {
      if (HighestPriority == 0) {
        this.clearAll(this.HighPriority)
        this.clearAll(this.MediumPriority)
        this.clearAll(this.LowPriority)
      } else if (HighestPriority == 1) {
        this.clearAll(this.MediumPriority);
        this.clearAll(this.LowPriority)
        this.MainThread.content = HighestPriorityContent
        this.MainThread.contentPriority = HighestPriority
        this.MainThread.stack.splice(0,this.MainThread.stack.length-1)
        
      } else if (HighestPriority == 2) {
        this.MainThread.stack.push(this.MainThread) // as it is the lowest priority events
        this.MainThread.content = HighestPriorityContent;
        this.MainThread.contentPriority = HighestPriority;
        
      }
      
    } else if (currentPriority == HighestPriority) {
      // update the content 
      this.MainThread.content = HighestPriorityContent
      if (HighestPriority == 1) {
        this.clearAll(this.HighPriority)
        this.clearAll(this.MediumPriority);
      this.clearAll(this.LowPriority)
        
      } else if (HighestPriority == 2) {
        this.clearAll(this.MediumPriority)
      } else if (HighestPriority == 3) {
        this.clearAll(this.LowPriority)
        this.MainThread.stack.splice(0,this.MainThread.stack.length-1)
      }


    }

    this.sendSignal(this.MainThread.content)
  } */

  /* 
  clearAll(arr: any[]) {
    let lastIndex = arr.length-1
    arr.splice(0, lastIndex);
  }
  sendSignal(signal) {
    console.log("sending signal to the wearable ", signal)

    
  } */
}
