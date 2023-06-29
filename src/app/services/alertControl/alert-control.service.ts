import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Observable, timer } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AlertControlService {
  /* 

    ! main aim of this service is to provode a centralised alert controls for the whole app
    ! all the alert control must be called through this service in future 
 


 */
  tripspageAlerts = []; // contains alert object with the time of dimissal
  timeInterval: number = 0;
  timeOutArray = [];
  overlayDelay: number = 1000;
  timerSub: any;
  constructor(private alertcontrol: AlertController) {}
// get the current alert from the screen 
  getAlert() {
    return new Promise((resolve) => {
      this.alertcontrol.getTop().then((data) => {
        console.log("TOP alert is ", data)
        resolve(data)
      })
      
    })
    
    
  }
  alertDismiss() {
    return new Promise((resolve) => {
      this.alertcontrol.dismiss().then((data) => {
        console.log(data)
        if (data) {
          // empty the array for alerts 
          this.tripspageAlerts=[]
        }
        resolve(data)
      })
      
    })
  }
  generateAlert(
    header: string,
    message: string,
    button: string,
    DimissDuration: number,
    id
  ) {
    const alert = {
      header: header,
      message: message,
      buttons: [
        {
          text: button,
          role: "confirm",
          handler: () => {},
        },
      ],
      cssClass: "home-back-alert",
      id: id
    };
    let alertObj = {
      alert: alert,
      DismissDuration: DimissDuration,
    };
    this.tripspageAlerts.push(alertObj);
    let timeout = 0;
    let sum = 0;
    // console.log("Array",JSON.stringify(this.tripspageAlerts));

    if (this.tripspageAlerts.length - 1 == 0) {
      timeout = 0;
      this.timeOutArray = [];
    } else {
      sum = 0;
      this.tripspageAlerts.forEach((element) => {
        // console.log(JSON.stringify(element));

        sum += element.DismissDuration;
      });
      timeout = sum;
      // check if the lasttimeout array has the same timeout for execution or not if yes delay the next alert
      if (this.timeOutArray.length != 0) {
        let lastTimeout =
          this.timeOutArray[this.timeOutArray.length - 1].timeout;
        if (timeout == lastTimeout) {
          timeout += this.overlayDelay;
        }
      }
      // console.log("timeinterval", this.timeInterval);
      // timeout = timeout - (this.timeInterval + 1) * 1000;
    }

    this.show(timeout);
  }

  show(timeout) {
    console.log("timeout", timeout);

    const t = setTimeout(
      async () => {
        // create alert here and show alert here

        const alert = await this.alertcontrol.create(
          this.tripspageAlerts[0].alert
        );
        alert.present().then(() => {
          // console.log("dismiss duration", this.tripspageAlerts[0].DismissDuration);
          // this.startTimer();
        });
 // ! 
        setTimeout(async () => {
          // this.stopTimer();
          this.tripspageAlerts.splice(0, 1);
          this.timeOutArray.splice(0, 1);
          await alert.dismiss();
        }, this.tripspageAlerts[0].DismissDuration);
      },
      timeout > 0 ? timeout + this.overlayDelay : 0
    );

    this.timeOutArray.push({
      timeoutindex: t,
      Dismiss: this.tripspageAlerts[0].DismissDuration,
      timeout: timeout,
    });
    // console.log("timeoutarray", this.timeOutArray);
  }
  // ? this timers can be used in order to optimise the alerts on the screen

  /* startTimer() {
    this.timerSub = timer(0, 1000)
      .pipe()
      .subscribe((val) => {
        console.log("val:", val);
        this.timeInterval = val;
      });
  }
  stopTimer() {
    this.timerSub.unsubscribe();
  } */
}

