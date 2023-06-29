import { Injectable } from "@angular/core";
import { BLE } from "@awesome-cordova-plugins/ble/ngx";
import { promise } from "protractor";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BluetoothLEService {
  scanTimer = 6; // the value of timer is in seconds
  bluetoothSettingsopen: boolean = false;
  BLE_uuid: string = "d619e693-26eb-4241-95c6-304608fa5b5f";
  wearableID = "3C:61:05:2F:FA:C6";
  wearable_characterstics = "d619e693-26eb-4241-95c6-304608fa5b5f";
  wearable_service = "63bbf1f7-a049-483a-ad01-af803a1929ae";

  /* 
  tech specs of the wearable for connection required to connect with the app


  * address: "3C:61:05:2F:FA:C6";
  * class: 7936;
  * id: "3C:61:05:2F:FA:C6";
  * name: "SmartWearable";
  * characterstics: "d619e693-26eb-4241-95c6-304608fa5b5f"
  * service = "63bbf1f7-a049-483a-ad01-af803a1929ae"
  
   */
  availableDevices = [];
  Bt_Interval;
  intervalStarted: boolean = false;
  isBtEnableVariable: boolean = false;

  constructor(private ble: BLE) {}

  // check function also required

  /*
   TODO: check bluetooth enable or not ==> // ? done
   TODO: if not open settings = // ? done
   TODO: if yes, ask for connection with bluetooth wearable device == // ? done
   
  */
  startIntervalCheck() {
    this.intervalStarted = true;
    console.log("BT interval started");
    this.Bt_Interval = setInterval(() => {
      console.log("calling Bt check again");
      this.bluetoothCheck();
    }, 3000);
  }

  bluetoothCheck(): Promise<boolean> {
    return new Promise((resolve) => {    
      this.isBtEnable().then((value) => {
        console.log("value is ", value)
        this.isBtEnableVariable= value
        if (value) {
          this.bluetoothSettingsopen = false;
          if (this.intervalStarted) {
            clearInterval(this.Bt_Interval);
            this.intervalStarted = false;
          }
          // this.scanDevices();
          // add a toast controller for bluetooth
        } else {
          if (this.bluetoothSettingsopen) {
            console.log("BT settings still open");
          } else {
            console.log("bleutoothsettings closed", this.bluetoothSettingsopen);
            this.openBTSettings();
            this.startIntervalCheck();
          }
        }
        resolve(true)
      }, (error) => {
        console.error("couldnt check btenable ", error)
        resolve(false)
      })
    })
  }

  scanDevices() {
    this.ble.scan(this.availableDevices, this.scanTimer).subscribe((device) => {
      console.log("scaned", device);
    });
  }

  ConnectWearable() {
    this.ble
      .connect(this.wearableID)
      .pipe(
        catchError((err) => {
          console.error("connection threw error ", err);
          return throwError("error while connecting" + err);
        })
      )
      .subscribe((callback) => {
        console.log("connection with wearable was succesfull", callback);
        // ! send data here for automatic connection.
      });
  }

  /* 

  function is modified to send data to a device and the format of data to be sent is uint8array

 */
  sendData(data: number, id, service, characterstic) {
    var packet = new Uint8Array(1);
    packet[0] = data; // 0x01;
    this.ble.write(id, service, characterstic, packet.buffer).then(
      (success) => {
        console.log("data succesfully sent", success);
      },
      (error) => {
        console.error("unsucessful data send", error);
      }
    );
  }

  // disconnects a particular device connection with specified device id
  disconnect(id: string) {
    this.ble.disconnect(id).then(
      (success) => {
        console.log("Succesfully disconnected", success);
      },
      (error) => {
        console.log("Unsucessful disconnection", error);
      }
    );
  }
  /*   

 it returns the data that is transmited via bluetooth , with the device characterstics stated as 
 both read and write 

    @ param takes device id , service and characterstic uuid of the device

 */

  recieveData(id, service, characterstic) {
    this.ble.read(id, service, characterstic).then(
      (success) => {
        console.log(
          "reading back",
          success,
          " type of recieved data :",
          typeof success
        );
        console.log("type of recieved data");
      },
      (error) => {
        console.log("error reading value back ", error);
      }
    );
  }

  // for opening bluetooth settings

  openBTSettings() {
    var check: boolean;

    this.ble.showBluetoothSettings().then(
      (success) => {
        console.log("bluetooth settings opened", success);
        check = true;
        this.bluetoothSettingsopen = true;
        console.log("check in success ", check);
      },
      (error) => {
        console.log("error opening bluetooth settings : ", error);
        check = false;
      }
    );
  }

  // for enabling bluetooth on the device

  enableBluetooth() {
    this.ble.enable().then(
      (success) => {
        console.log("bluetooth succesfully enabled");
      },
      (error) => {
        console.error("unable to enable bluetooth services on device");
      }
    );
  }

  // check if bluetooth is enable or not

  isBtEnable(): Promise<boolean> {
    return new Promise((resolve) => {
      console.log("check bt enabled");
      this.ble.isEnabled().then(
        (success) => {
          console.log("bluetooth is enabled", success);
          this.isBtEnableVariable = true;
          resolve(true)
        },
        (fail) => {
          console.error(fail);
          resolve(false)
        }
      );
    });
  }

  isBtConnected(id: string) {
    this.ble.isConnected(id).then(
      (success) => {
        console.log("device connected");
        return true;
      },
      (eror) => {
        console.error("device disconnected");
        return false;
      }
    );
  }

  //for cehcking connection with bluetooth device
}
