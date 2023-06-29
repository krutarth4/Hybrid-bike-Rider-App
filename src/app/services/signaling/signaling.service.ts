import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { AlertController, ToastController } from "@ionic/angular";
import { GlobalConstants as GConst }  from "src/app/common/global-constants";
import { Vibration } from "@awesome-cordova-plugins/vibration/ngx";
import { TextToSpeech } from "@ionic-native/text-to-speech";
import { AlertControlService } from "../alertControl/alert-control.service";
import { OutputControllerService } from "../outputController/output-controller.service";
import { Users } from "src/app/interface/users";
 interface Idata{
  type;
  modifier;
  name;
  
}

@Injectable({
  providedIn: "root",
})
export class SignalingService {
  swarmId = null;
  user = null;
  response;
  duration;
  distance;
  navInformation;
  navIcon;
  alertpresent:boolean = false;
  constructor(
    public http: HttpClient,
    public alertCtrl: AlertController,
    public alertController : AlertControlService,
    private vibration: Vibration,
    public toastController: ToastController,
    private tts: TextToSpeech,
    public outputController : OutputControllerService
  ) {}
  // general ttp call for all navigation form
  callSpeach(message) {
    /* this.tts
      .speak(message)
      .then(() => console.log("success"))
      .catch((res) => {
        console.log("ERROR generated due to navigation to voice ", res);
      }); */
  }

  //shows the right alert depending on the resp
  signaling(resp, result, time, filterForChoosenRoute:Users) {
    
    console.log("in signaling");
    console.log(
      "In signaling responses according to radius",
      resp[0]["radius"]
    );
    if (resp[0]["radius"] == GConst.meeting_checkppoint_radius_outside) {
      if (resp[0].id.includes(filterForChoosenRoute.foreign_trip_id)) {
        this.approachAlert(resp[0].notification.title, result, time);
      console.log(
        "radius code 50  approaching alert for the checkpoint ",
        resp[0],
        " ",
        result,
        "  ",
        time
      );
      this.vibration.vibrate([3000]);
        
      }
      
    }
    if (resp[0]["radius"] == GConst.leaving_checkppoint_radius_outside) {
      if (resp[0].id.includes(filterForChoosenRoute.foreign_trip_id)) {
        this.leaveAlert(resp[0].notification.title, result, time);
      console.log(
        "radius code 50 leaving schwarm ",
        resp[0],
        " ",
        result,
        "  ",
        time
      );
      this.vibration.vibrate([3000]);
        
      }
      
    }
    if (resp[0]["radius"] == GConst.checkpoint_radius_inner) {
      if (resp[0].id.includes(filterForChoosenRoute.foreign_trip_id)) {
        console.log(
          "radius code 10, checkpoint alert just reached checkpoint",
          resp[0],
          " ",
          result,
          "  ",
          time
        );
  
        this.outputController.genereateOutput("innercheckpointAlert", "You just arrived at the checkpoint")
        if (!this.alertpresent) {
          this.alertpresent= true
          // this.checkPointAlert();
          // this.vibration.vibrate([3000]);
          
        }
        
      }
      
    }
    // notification for the destination arrived
    if (resp[0]["radius"] == GConst.destination_radius) {
      this.leaveAlertRoute(resp[0].notification.title);
      console.log(
        "radius code 50 destination arrived",
        resp[0],
        " ",
        result,
        "  ",
        time
      );
      this.vibration.vibrate([3000]);
    }
    if (resp[0]["radius"] == GConst.navigational_radius) {
      this.Navigationaller(
        resp[0].notification.title,
        resp[0]["notification"]["text"],
        resp[0]["notification"]["icon"],
        resp[0].notification.data
      );
      console.log(
        "navigation information from geofence",
        resp[0],
        " ",
        result,
        "  ",
        time
      );
      this.vibration.vibrate([3000]);
    }
    if (resp[0]["radius"] == GConst.navigational_leave_radius) {
      this.Navigationaller(
        resp[0].notification.title,
        resp[0]["notification"]["text"],
        resp[0]["notification"]["icon"],
        resp[0].notification.data
      );
      console.log(
        "navigation information from geofence",
        resp[0],
        " ",
        result,
        "  ",
        time
      );
      this.vibration.vibrate([1000]);
    }

    
  }
  async Navigationaller(title, text, icon, data) {
    let inhalt = "";
    console.log("now in signaling navigation ", title,"text",text);
    //check first if street name is defined
    // ! here we have to consider what infromation is available to us and what is not

    // return what is available , if not edit the message inn something understandable 
    let keywords = data;
    inhalt = this.checkNavigationInformation(keywords)


    
      this.navInformation = inhalt;
      this.navIcon=icon

      this.callSpeach(inhalt);
    
    console.log("-----------inhalt is :", inhalt);
  }
  checkNavigationInformation(data: Idata):string {
    // start with the type 
    let type = data.type, name = data.name, modifier = data.modifier;
    let output =""
    if (type == "" || type.includes("undefined") || type.includes(undefined)) {
       output = ""
    } else {
      output = type;
    }
    // check modifier
    if (modifier == "" || modifier.includes("undefined") || modifier.includes(undefined)) {
      //  output += ""
       output += ""
    } else {
      output = output + " " + modifier;
    }

    // check for street name 
    if (name == "" || name.includes("undefined") || name.includes(undefined)) {
      //  output += " "
       output += ""
    } else {
      output = output + " " + name;
    }
    return output
    
  }
  async approachAlert(street, result, time) {
    let message: string;
    if (
      street == "undefined" ||
      result == "undefined" ||
      time == "undefined" ||
      street == undefined ||
      result == undefined ||
      time == undefined ||
      street == null ||
      result == null ||
      time == null
    ) {
      message = "Reaching the checkpoint in 50 meters";
    } else {
      message =
        "Reaching the checkpoint in: " +
        result +
        " -- " +
        time +
        "min" +
        " at " +
        street;
    }
    
    this.outputController.genereateOutput("meetcheckpointAlert", message)

    this.callSpeach("Reaching checkpoint in 50 meters");
  }

  async leaveAlert(street, result, time) {
    let message: string;
    if (
      street == "undefined" ||
      result == "undefined" ||
      time == "undefined" ||
      street == undefined ||
      result == undefined ||
      time == undefined ||
      street == null ||
      result == null ||
      time == null
    ) {
      message = "Leaving the swarm";
    } else {
      message =
        "Leaving the Swarm in: " +
        result +
        " -- " +
        time +
        "min" +
        " at " +
        street;
    }

    this.outputController.genereateOutput("leavecheckpointAlert", message)
    this.callSpeach(message);
  }
  async leaveAlertRoute(street) {
    let alertmesage = "";
    if (
      street == undefined ||
      street == "undefined" ||
      street == "" ||
      street.includes("undefined")
    ) {
      alertmesage = "Destination reached";
    } else {
      alertmesage = "Destination reached" + street;
    }
    this.navInformation = alertmesage;
    

    this.outputController.genereateOutput("destinationReached", alertmesage)
    this.callSpeach(alertmesage);
  }
  async checkPointAlert() {
    let alert = await this.alertCtrl.create({
      header: "Checkpoint Alert",
      message: "You just reached the checkpoint",
      cssClass: "home-back-alert",
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.alertpresent=false
          }
        }
      ],
    });
 
      await alert.present();

    setTimeout(() => {
      alert.dismiss();
      this.alertpresent=false
    }, 5000);
    this.callSpeach("You just reached the checkpoint");
  }

  getNavigationalInformation(): Promise<string> {
    // return this.navInformation;
    return new Promise((resolve) => {
      console.log("[signaling] Navinfromation :", this.navInformation);
      resolve(this.navInformation);
    });
  }
  getNavigationalSigns(): Promise<string> {
    // return this.navInformation;
    return new Promise((resolve) => {
      // console.log("[signaling] Navinfromation :", this.navInformation);
      resolve(this.navIcon);
    });
  }
}
