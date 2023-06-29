// TODO : create sub-Interfaces 

export interface Users {
  device_id?;
  trip_id?; // tripproposal trip id
  trip_id_geometry?; // geometry of the given user in trip id
  

  marker?; // marker for the foreign user position 
  checkpointMarker?; // point of intersection of user and foreign user/swarm
  leavingMarker?; // leaving marker 
  markerExist?:boolean;// if the given marker has been placed or not 
  foreign_trip_id?; // trip id of the intersected trip id
  foreign_trip_id_geometry?; // geometry of foreign trip id with the given trip id
  swarm_id?; // given swarm intersection id
  intersection_distance?; // length of intersected distance or overlapping path
  intersection_geometry?; // geometry of intersected path
  position?: {
    // position of the swarm or foreign user
    lat?;
    lng?;
  };
  speed?; // speed of the foreign user
  isAbleToMakeSwarm?: boolean; // using the mathematical model if the swarm will be able to make it to the swarm
  suggestedSpeed?: number // suggested speed at which user shouuld travel to reach the checkpoint and make swarm possible
  
  user_distanceToCover?; // distance in meter to the initial checkpoint of the intersecting polyline
  swarm_distanceToCover?; // distance to be covereed from swarm / foreign user position 
                          // to the checkpoint through the path traversed
  ETA_swarm?; // time to which the foreign user/ swarm  will reach the checkpoint 
  ETA_user?;// time required to reach the checkpoint  by yourself
  intersection_polyline_LatLngs?; // decoded intersection polyline in order to optimize in-app Calculation
  color?; // color assigned to the user
  user_distance_to_leaving_point?; // it contains the distance of user from current position to the leaving point
  user_ETA_to_leaving_point? // time required to reach the leaving point in sec 
}
