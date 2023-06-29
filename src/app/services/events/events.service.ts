import { Inject, Injectable } from "@angular/core";
import { Vibration } from "@awesome-cordova-plugins/vibration/ngx";
import { Platform, ToastController } from "@ionic/angular";
import { v4 as uuidv4 } from "uuid";
import { OutputControllerService } from "../outputController/output-controller.service";
import { RestApiService } from "../rest-api/rest-api.service";
import { error } from "console";
export interface MeshNetworkMessage {
  messageType: string;
  device_id: string;
  leader: string;
  swarm_id: string;
  previous_endpoints: string[];
  tripintersection_geometry: string;
  current_endpoints: string[];
}

export enum swarmEvent {
  "none",
  "split",
  "merge",
}

declare var NearbyConnections: any;

@Injectable({
  providedIn: "root",
})
export class Events {
  swarmId: string;
  cercle = 2;
  timeoutflag: boolean = true;
  selected_endpoint: string;
  current_user_object: any;
  updated_user_list;
  second_list: any;
  toasts = [];
  swarmCreated: boolean = false;

  // changes for Mesh network synchronization

  dataPacket: MeshNetworkMessage = {
    messageType: "",
    device_id: this.rest.deviceId,
    leader: null,
    swarm_id: null,
    previous_endpoints: [],
    tripintersection_geometry: null,
    current_endpoints: [],
  };

  meshNetworkDB: Array<MeshNetworkMessage> = [];
  meshLeader: string = null;

  constructor(
    private rest: RestApiService,
    private toastCtrl: ToastController,
    private vibration: Vibration,
    private platform: Platform,
    private outputConntroller: OutputControllerService
  ) {
    /**
     * TODO :
     *  connection is done and we send the data to the local mesh network
     *
     * 1) connection happened
     * 2)
     *
     * you are in connection
     * send the data to the local network for them to know whats happening // ? should be done during the timeout or already before that
     *
     * once the db has been initialized
     *
     * timeout comes -> there we decide if a person is in swarm, or not
     *
     * if yes -> show a circle around his marker
     *
     * if not -> do nothing
     *
     * ------------------------------- for its own user UI we are done -------------------------
     *
     * ---------------------  now comes the client backend part ---------------------
     *
     * DB needs to be to its updated list
     *
     * *Important task*: where to send the data to the local network and which previous and current lists should be sent
     *
     *
     * check in filtered_db if any leader present
     *
     * if yes -> get its swarm id assign leader and start updating
     *    if more than one leader present -> get all swarm ids and get ready for merge
     *
     * if not -> check if in previous list if they were in same list or not
     *
     * now in mesh_list check if there is any leader present
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * // we can check if there was any update in the same swarm id -> if yes then there is still a swarm present but if not then no swarm available
     * // it takes the same amount of copmputing resources as that of sending the message to the local network
     *
     * ! check if the previous leader is there or not -> if yes -> then flush message previous messages
     */
  }

  // make event manager do the work , for all the events --> joining, create, leave {}
  /**
   * time in ms to check the connection endpoints
   */
  delay_time: number = 5000;
  // global variable
  /**
   * actuall real time mesh nodes
   */

  current_object: any;
  current_list: any;
  /**
   * Previous state of the mesh nodes`
   */
  previous_object: any;
  previous_list: any = [];

  /**
   * Intermediate storage
   */
  temp_object: any;
  temp_list: any;

  user_meshId: any = this.rest.deviceId;
  first_initalize: boolean = true;
  swarmInterval;
  swarmIntervalTime: number = 5000;
  // ! better of the service is changes to new service with promise as a type
  initialize(obs) {
    console.log(
      "------------------------------new ---------------",
      "device id",
      this.rest.deviceId,
      "USer id ",
      this.rest.userId
    );
    console.log("[events]initializing", obs);
    console.log("------------------------------[event]---------------");
    console.log("[events]initializing", JSON.stringify(obs));

    console.log(
      "check before: prev -",
      this.previous_object,
      "temp:",
      this.temp_object
    );
    // todo : send first message for mesh network DB

    /**
     *
     * [
     *  "event_type": MESSAGE_RECEIVED,
     *   "data_string": "datastring"
     *  ]
     */

    // TODO : differentitate the flush message from other events
    // from trips page initialize new function to controll DB
    /* if (obs["event_type"] == "MESSAGE_RECEIVED") {
      console.log("Message recieved", obs);
      // ? function which interprets the message recieved

      this.groupDBController(obs);

      return;
    } */
    this.current_object = obs;
    // this.sendMessageToMeshNetwork("first"); // ! could be implemented after timeout

    if (this.previous_list.length == 0) {
      console.log("11111");
      this.temp_object = this.current_object;
      this.previous_object = this.temp_object;
      this.previous_list = this.previous_object["endpoint_list"];
      this.first_initalize = false;
      this.cercle = 2;
      console.log("firsrt initialize", JSON.stringify(this.previous_list));
    } else {
      console.log("present in a swarm");
      // console.log("timeoutflag", this.timeoutflag)
      if (this.timeoutflag) {
        this.timeoutflag = false;

        setTimeout(() => {
          console.log("-------------------timeout------------");
          let curr_obj = this.current_object;
          console.log(
            "[events- subscribed in timeout to ]",
            JSON.stringify(this.current_object)
          );
          //TODO: check here if leader present or not

          this.temp_object = curr_obj;
          console.log(
            " prev -",
            this.previous_object,
            "temp:",
            this.temp_object
          );
          //console.log("-------------conditional-------");
          this.temp_list = this.temp_object["endpoint_list"];
          console.log("comparing variables are : ");
          console.log("temp", JSON.stringify(this.temp_list));
          //this.previous_list=this.previous_object["endpoint_list"];
          console.log("prev", JSON.stringify(this.previous_list));
          // compare if temp and prev lists here
          const array1Sorted = this.previous_list.slice().sort();
          this.temp_list
            .slice()
            .sort()
            .every(function (value, index) {
              console.log(value === array1Sorted[index]);
              return value === array1Sorted[index];
            });
          const array2Sorted = this.previous_list.slice().sort();
          if (this.temp_list.length == this.previous_list.length) {
            if (
              this.temp_list
                .slice()
                .sort()
                .every(function (value, index) {
                  return value === array2Sorted[index];
                })
            ) {
              // the value of cercle remains same
              // this.cercle= this.cercle
              // ! reconnected to swarm
              console.log("reconnneted to swarm ");
              // this.generateToast("reconnected to swarm ");
            } else {
              // ! user is replaced by someone else
              console.log(
                "New user joined the network and one other user left"
              );
            }
          }
          /**
           * create new swarm & new users joining
           * *create new swarm and add more users in swarm*
           */
          if (this.temp_list.length > this.previous_list.length) {
            const joined_users =
              this.temp_list.length - this.previous_list.length;
            if (this.previous_list.length < 2) {
              // ! swarm created
              this.cercle = 1;
              /* // TODO : make sure the database is updated

              this.swarmGroupController(
                this.temp_list,
                this.previous_list,
                swarmEvent.none
              );
 */
              // swarm created
              /* this.generateToast("You joined the swarm");
            this.vibration.vibrate([2000, 1000, 2000]); */
              this.outputConntroller.genereateOutput("joinSwarm");
            } else {
              // {joined users} users joined the swarm
              //swarm joined
              // ! someone else joined the swarm
              this.cercle = 1;
              /* this.generateToast("Someone joined swarm");

            this.vibration.vibrate([1000]); */
              /*   //todo: assign leader
              this.swarmGroupController(
                this.temp_list,
                this.previous_list,
                swarmEvent.none
              ); */
              this.outputConntroller.genereateOutput("userJoinedSwarm");
            }
          }
          /**
           *
           */
          if (this.temp_list.length < this.previous_list.length) {
            const left_users =
              this.previous_list.length - this.temp_list.length;
            if (this.temp_list.length == 0) {
              // ! you left the swarm
              this.cercle = 2;
              // reset all the information for meshNetwork and leader
              /* if (this.meshLeader == this.user_meshId) {
                // todo : delete swarm
                // todo reset all the information for meshNetwork and leader
              } else {
                //todo : only reset the meshNetwork
              }
              this.resetLocalClient(); */

              this.outputConntroller.genereateOutput("leaveSwarm");
            } else {
              // swarm left
              // {left_users} left the swarm
              /* this.generateToast("Someone left the swarm ");
            this.vibration.vibrate([4000]); */
              // ! someone left the swarm
              //! SPLIT COULD HAPPEN HERE

              // todo : only need to update the meshNetwork
              this.outputConntroller.genereateOutput("userLeftSwarm");
            }
          }
          // flush message only when you are the leader
          // ! commented out 
         /*  if (this.are_you_leader) {
            this.sendMessageToMeshNetwork(
              "first",
              this.previous_list,
              this.temp_list
            );
          } */

          let prev = this.previous_list;
          this.previous_object = this.temp_object;
          this.previous_list = this.temp_object["endpoint_list"];

          // * implementation for new split /merge feature
          // ! commented out 
          // this.swarmGroupController(this.temp_list, prev, swarmEvent.none);
          // using the help of local DB we see the current list and check all the inforamtion about all other user

          this.timeoutflag = true;
        }, this.delay_time);
      } else {
      }
    }
  }
  swarmGroupController(currentList, previousList, event: swarmEvent) {
    console.log("swarmGroupController");
    let mesh_list = currentList;
    let prev_list = previousList;
    // filterred db contains the list of current object devices with swarmid and leader information
    let filtered_db = this.meshNetworkDB.filter((obj) => {
      mesh_list.includes(obj.device_id);
    });

    console.log(
      "🚀 ~ file: events.service.ts:353 ~ Events ~ letfiltered_db=this.meshNetworkDB.filter ~ filtered_db:",
      filtered_db
    );

    if (mesh_list.length == 0) {
      // there are no member present
      this.resetLocalClient();
      // TODO: delete swarm somewhere 
      return;
    }

    if (filtered_db.length == 0) {
      if (this.swarmId) {
        // we were in swarm group , a swarm split have happened
        // leader is not present in the mesh endpoint list, but a endpoint from that leader is present
        // generate new Split swarm Id
        let old_swarm_id = this.swarmId;
        let new_swarm_id = old_swarm_id + "/001/" + uuidv4() + "/";
        let id = this.assignLeader(mesh_list);
        this.swarmId = new_swarm_id;
        if (id == this.user_meshId) {
          // create new Split swarm
          this.createSwarm(mesh_list, swarmEvent.split);
        } else {
          // do nothing as you are not the leader
        }
      } else {
        // no swarm Id present -> hence individual user
        // create new swarm
        // for creating new swarm from individual user

        // there are still some user who don't have a mesh leader
        // thus are considered individual users
        let id = this.assignLeader(mesh_list);
        if (this.user_meshId == id) {
          //create swarm

          this.generateSwarmID(null, swarmEvent.none);
          this.createSwarm(mesh_list, swarmEvent.none);
          this.generateToast("creating a new swarm");
          console.log("creating new swarm swarmId :", this.swarmId);
        }
      }

      return;
    }

    let groupedArray = filtered_db.reduce((acc, obj) => {
      const key = obj.leader;
      if (!key) {
        // do nothing
      } else {
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }
    }, {});

    console.log("groupedArray", groupedArray);
    if (Object.keys(groupedArray).length == 1) {
      console.log("one group present ");
      let key = Object.keys(groupedArray)[0];
      if (mesh_list.includes(key)) {
        // leader is present in the mesh endpoint list
        const result = this.meshNetworkDB.find((obj) => obj.device_id == key);
        let id = this.assignLeader(mesh_list);
        this.swarmId = result.swarm_id;
        if (id == this.user_meshId) {
          // update the swarm as you are the leader
          this.updateUsersInSwarm(mesh_list);
        } else {
          // do nothing as you are not the leader
        }
      } else {
        /* // leader is not present in the mesh endpoint list, but a endpoint from that leader is present
        let key = Object.keys(groupedArray)[0];
        const result = this.meshNetworkDB.find((obj) => obj.device_id == key);
        // generate new Split swarm Id
        let old_swarm_id = result.swarm_id;
        let new_swarm_id = old_swarm_id + "/001/" + uuidv4() + "/";
        let id = this.assignLeader(mesh_list);
        this.swarmId = new_swarm_id;
        if (id == this.user_meshId) {
          // create new Split swarm
          this.createSwarm(mesh_list, swarmEvent.split);
        } else {
          // do nothing as you are not the leader
        }
 */
        // this.generateSwarmID(old_swarm_id,swarmEvent.split);
      }
    } else if (Object.keys(groupedArray).length >= 2) {
      // if you are the leader delete old swarm
      if (Object.keys(groupedArray).includes(this.user_meshId)) {
        this.rest.deleteSwarm(this.swarmId);
      }

      // get information about all the previous leader
      const filteredArray = this.meshNetworkDB.filter((obj) =>
        Object.keys(groupedArray).includes(obj.leader)
      );
      // assign new leader
      let id = this.assignLeader(mesh_list);
      if (this.user_meshId == id) {
        // you are the leader
        const concated_swarm_id = filteredArray
          .map((obj) => obj.swarm_id)
          .join("+");
        this.swarmId = concated_swarm_id;
        this.generateSwarmID(concated_swarm_id, swarmEvent.merge);
        this.createSwarm(mesh_list, swarmEvent.merge);
      } else {
        // do  nothing as you are not the leader
      }
    } else {
      console.log("no leader");

      if (filtered_db.length !== 0) {
        console.log(
          "🚀 ~ file: events.service.ts:427 ~ Events ~ swarmGroupController ~ filtered_db:",
          filtered_db
        );
        // reset everything as it has left all mesh network
        if (this.meshLeader == this.user_meshId) {
          // delete the swarm
          console.log("delete the swarm", this.swarmId);
          this.generateToast("deleting  a new swarm");
          this.rest.deleteSwarm(this.swarmId);
        } else {
          console.log("you were not for deleting swarm");
        }
      } else {
        /*  // for creating new swarm from individual user 

        // there are still some user who don't have a mesh leader
        // thus are considered individual users
        let id = this.assignLeader(mesh_list);
        if (this.user_meshId == id) {
          //create swarm

          this.generateSwarmID(null, swarmEvent.none);
          this.createSwarm(mesh_list, swarmEvent.none);
          this.generateToast("creating a new swarm");
          console.log("creating new swarm swarmId :", this.swarmId);
        } */
      }
    }
    // if leader then send sync message

    if (this.meshLeader == this.user_meshId) {
      this.sendMessageToMeshNetwork(
        "Leader",
        this.previous_list,
        this.temp_list
      );
    }
  }

  /**
   * rest the data packet
   * i.e
   * Messagetype  -> ""
   * Swarm Id -> null
   * current_endpoint ->[]
   * previous_endpoint -> []
   * leader -> null
   */

  resetDataPacket() {
    this.dataPacket.current_endpoints = this.dataPacket.previous_endpoints = [];
    this.dataPacket.leader = this.dataPacket.swarm_id = null;
    this.dataPacket.messageType = "";
  }

  /**
   * leader array provides us an overview of the current swarm leader
   * and help to determine which event should be triggered
   *
   * For example : swarmEvent.none => means an individual user have joined a group or another individual
   *              swarmEvent.split => a group has splitted in different users
   *               swarmEvent.merge => two groups have merged together
   */
  //! todo: check the status of the leader from the swarm as duplicates can still get in
  // done
  leaderArray = [];
  /**
   *   main objective is to store all the flush messages and reset after the whole process is complete
   * @param obj object recieved from the mesh network
   * @currently_not_in_use as If another method is used and we want consistent data this could be used
   */

  groupDBController(obj) {
    try {
      if (!this.meshNetworkDB) {
        this.meshNetworkDB = [];
      }

      // save your information in DB if you are the leader
      if (this.are_you_leader) {
        if (!this.user_meshId || !this.dataPacket.device_id) {
          this.user_meshId = this.rest.deviceId;
          this.dataPacket.device_id = this.user_meshId;
          console.log("mesh user id undefined");
        }
        let ref_self = this.meshNetworkDB.findIndex((user) => {
          return user.device_id == this.user_meshId;
        });
        if (ref_self != -1) {
          // object found in local database  -> update message
          this.meshNetworkDB[ref_self] = this.dataPacket;
        } else {
          // initialize new object instance in local database
          console.log("self object", this.dataPacket);
          this.meshNetworkDB.push(this.dataPacket);
        }
      }

      let userMessage: MeshNetworkMessage = JSON.parse(obj["data_string"]);
      console.log(
        "🚀 ~ file: events.service.ts:541 ~ Events ~ groupDBController ~ userMessage:",
        userMessage
      );
      if (userMessage.messageType == "Leader") {
        // this is a sync message by the leader
        this.swarmId = userMessage.swarm_id;
        if (this.meshLeader != userMessage.leader) {
          console.error(
            "error assigning leader",
            this.meshLeader,
            "sync message by leader",
            userMessage.leader
          );
        }
        // reset the database as we don't need it anymore
        this.meshNetworkDB = [];
        return;
      }

      let ref = this.meshNetworkDB.findIndex((user) => {
        return user.device_id == userMessage.device_id;
      });
      // TODO : check if already present; yes -> update DB ; no -> push //?done

      if (ref != -1) {
        // object found in local database  -> update message
        this.meshNetworkDB[ref] = userMessage;
      } else {
        // initialize new object instance in local database
        this.meshNetworkDB.push(userMessage);
      }
    } catch (error) {
      console.error("error updating netwrok DB", error);
    }
  }

  /**
   *   main objective is to maintain the mesh network database and store all the necessary information needed
   * @param obj object recieved from the mesh network
   * @currently_not_in_use as If another method is used and we want consistent data this could be used
   */
  groupDBController_advance(obj) {
    console.log(
      "🚀 ~ file: events.service.ts:519 ~ Events ~ groupDBController ~ obj:",
      obj
    );
    console.log("self user id ", this.rest.deviceId);
    try {
      if (!this.user_meshId || !this.dataPacket.device_id) {
        this.user_meshId = this.rest.deviceId;
        this.dataPacket.device_id = this.user_meshId;
        console.log("mesh user id undefined");
      }

      // put yourself in the database
      if (!this.meshNetworkDB) {
        this.meshNetworkDB = [];
      }
      console.log("Mesh network before adding object", this.meshNetworkDB);

      let ref_self = this.meshNetworkDB.findIndex((user) => {
        return user.device_id == this.user_meshId;
      });
      if (ref_self != -1) {
        // object found in local database  -> update message
        this.meshNetworkDB[ref_self] = this.dataPacket;
      } else {
        // initialize new object instance in local database
        console.log("self object", this.dataPacket);
        this.meshNetworkDB.push(this.dataPacket);
      }

      let userMessage: MeshNetworkMessage = JSON.parse(obj["data_string"]);
      console.log(
        "🚀 ~ file: events.service.ts:541 ~ Events ~ groupDBController ~ userMessage:",
        userMessage
      );
      if (userMessage.messageType == "Leader") {
        // this is a sync message by the leader
        this.swarmId = userMessage.swarm_id;
        if (this.meshLeader != userMessage.leader) {
          console.error(
            "error assigning leader",
            this.meshLeader,
            "sync message by leader",
            userMessage.leader
          );
        }

        // todo : check of the list provided by the leader has same number of users in the group

        // todo : send new sync message in the group
        // to sync swarm_id in the mesh network
        // ! no need as leader will send the message in swarm network
        // this.sendMessageToMeshNetwork("sync");

        // todo : delete leaderArray and update with the new leader
        return;
      }

      let ref = this.meshNetworkDB.findIndex((user) => {
        return user.device_id == userMessage.device_id;
      });
      // TODO : check if already present; yes -> update DB ; no -> push //?done

      if (ref != -1) {
        // object found in local database  -> update message
        this.meshNetworkDB[ref] = userMessage;
      } else {
        // initialize new object instance in local database
        this.meshNetworkDB.push(userMessage);
      }

      // TODO : check what are the present leader and sync the in
      if (userMessage.leader) {
        console.log("Leader found ", userMessage.leader);
        let ref2 = this.leaderArray.findIndex((user) => {
          return user.device_id == userMessage.device_id;
        });
        // TODO : check if already present; yes -> update DB ; no -> push //?done

        if (ref2 != -1) {
          // object found in local database  -> update message
          this.leaderArray.push(userMessage.leader);
        } else {
          console.log("user with id :", userMessage.leader, "already exist");
        }
      } else {
        console.log("No Leader present");
      }
    } catch (error) {
      console.error("error updating netwrok DB", error);
    }
  }
  /**
   * this function resets the local service inputs
   * @return{void}
   */

  resetLocalClient() {
    this.resetDataPacket();
    this.swarmId = null;
    this.meshNetworkDB = [];
    this.meshLeader = null;
    this.leaderArray = [];
    this.previous_list = this.current_list = [];
    this.previous_object = this.current_object = null;
  }

  sendMessageToMeshNetwork(messageType: string, previousList, currentList) {
    // update data packet to send the mesh network
    console.log("dataPacket", this.dataPacket);
    this.dataPacket.messageType = messageType;
    this.dataPacket.swarm_id = this.swarmId;
    this.dataPacket.device_id = this.user_meshId;
    this.dataPacket.current_endpoints = currentList
      ? this.current_object["endpoint_list"]
      : [];
    this.dataPacket.previous_endpoints = previousList
      ? this.previous_object["endpoint_list"]
      : [];
    this.dataPacket.leader = this.meshLeader;
    //todo : get trip intersection to share with the whole mesh network
    // !this.dataPacket.tripintersection_geometry

    if (this.platform.is("android")) {
      this.platform.ready().then(() => {
        if (NearbyConnections) {
          NearbyConnections.flushMessage(
            function (success) {
              // successful message sent
              console.log("message sent in the mesh network");
            },
            function (error) {
              // error sending message
              console.error("[fatal] Message not sent");
              setTimeout(() => {
                console.log("sending message again");
                this.sendMessageToMeshNetwork(
                  messageType,
                  previousList,
                  currentList
                );
              }, 3000);
            },
            JSON.stringify(this.dataPacket)
          );
        }
      });
    }
  }

  /**
   * this function returns a user ID : string
   * which is the smallest user Id of all
   *
   * @returns {void} the min user Id from the list
   */
  getMinUser(list): string {
    console.log("min user called ", JSON.stringify(list));
    let minUser;
    minUser = list.slice().sort()[0];
    console.log("min user", minUser);
    return minUser;
  }

  /**
   * generates a swarm in the backend
   * @param list list of the active user in the group
   */

  createSwarm(list, event: swarmEvent) {
    let list_array = [];
    list.forEach((element) => {
      list_array.push({
        device_id: element,
      });
    });
    // TODO : generate swarm id
    let id = this.generateSwarmID(event);
    console.log("array to be given list array ", list_array);
    this.generateToast("Leader of the group");
    this.rest.postSwarm(list_array, this.swarmId).then(
      (success) => {
        console.log("postswarm", JSON.stringify(success));
        this.swarmCreated = true;
      },
      (error) => {
        console.error("[ERROR] creating swarm id :", id, " ", error);
      }
    );
  }
  /**
   * This helps to generate a new Swarm Id for the group
   * Usefull in the merge and split events
   *
   */

  // TODO : ! remove optional param

  generateSwarmID(oldSwarmId, event?: swarmEvent): string {
    let id;
    if (!oldSwarmId) {
      id = uuidv4();
    } else {
      if (event == swarmEvent.split) {
        id = oldSwarmId + "/_001";
      }
      if (event == swarmEvent.merge) {
        id = oldSwarmId;
      }
    }
    this.swarmId = id;
    console.log("generate new swarmId", id);
    return this.swarmId;
  }
  /**
   * function helps to check and assign a leader
   */
  are_you_leader: boolean = false;
  assignLeader(list) {
    let leader = this.getMinUser(list);
    // check if the leader has a swarm id
    this.meshLeader = leader;
    if (this.meshLeader == this.user_meshId) {
      this.are_you_leader = true;
    } else {
      this.are_you_leader = false;
    }
    console.log("leader", leader, "are you leader ", this.are_you_leader);
    return leader;
  }
  /**
   * REST API call for updating members in swarm
   * @param list list of all members in swarm
   */
  updateUsersInSwarm(list) {
    console.log("updateUsersInSwarm called ", JSON.stringify(list));
    let list_array = [];
    list.forEach((element) => {
      list_array.push({
        device_id: element,
      });
    });
    this.rest.updateSwarm(list_array, this.swarmId).then(
      (suc) => {
        console.log("upadte swarm :", suc);
      },
      (error) => {
        console.error("Error updating swarm members :", error);
      }
    );
  }

  /**
   * @deprecated
   */
  event_stop() {
    this.previous_object = this.temp_object = {};
    this.previous_list = this.temp_list = [];
    this.cercle = 2; // event re-initialized no circle present
  }
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

  getUpdated_cercle(): number {
    // console.log("cercle is :", this.cercle);
    // console.log("swarm participants", this.previous_list.length);

    return this.cercle;
  }
  set_cercle(x: number) {
    this.cercle = x;
  }

  initializeFunction0(obj) {
    console.log("object recieved to the service : ", obj);
  }

  getUpdated_card() {
    return "4";
  }

  getSwarmLength() {
    return this.previous_list.length;
  }

  /**
   * @deprecated
   * @param list
   */
  updateInfoSwarm(list) {
    this.swarmInterval = setInterval(() => {
      this.rest.updateSwarm(list, this.rest.swarmId);
    }, this.swarmIntervalTime);
  }
  /**
   * @deprecated
   */

  stopUpdatinginfo() {
    clearInterval(this.swarmInterval);
  }
}
