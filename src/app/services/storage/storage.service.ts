import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import { resolve } from "dns";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  // key value array
  keyArray = [];
  // this variable is the persistent storage
  private _storage: Storage;
  // flag to know if trip was suceesfull or not
  private TripSuccessful: boolean;
  // old trip id
  private tripID: string;
  // userID
  private UserID;
  // device ID
  private DeviceId;

  // ! settings variable will be saved here
/* 
this.storage.set("deviceID:", this.deviceId);
this.storage.set("userID:", data["user_id"]);
this.storage.set("trip_id", this.choosen_route_id)



 */  

  returnValue;

  constructor(private storage: Storage) {
    
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    console.log("function calles init serice storage");
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // set a key value pair
  public set(key: string, value: any) {
    this._storage?.set(key, value);
    this.keyArray.push({ key: key, value: value });

  }
  // get the stored key value
  async get(key: string) {
    const name = await this._storage?.get(key);
    console.log("get:key -",key, "value" , name);
    return name;
  }
  // delete the stored key value
  delete(key: string) {
    this._storage?.remove(key);
  }
  // clear the whole storage
  clearStorage() {
    this.keyArray=[]
    this._storage.clear();
  }

  // return all the stored key value pair

  getAll() {
    return new Promise((resolve) => {
      let arr=[]
      this._storage?.forEach((value, key) => {
        console.log(key, ":", value);
        arr.push({ key: key, value: value });
      });
      console.log("key array is ", arr);
       resolve(arr);
    });
  }

  get_sync_keyvaluearray(){
    return new Promise((resolve) => {
      resolve(this.keyArray)
    })
  }
}
