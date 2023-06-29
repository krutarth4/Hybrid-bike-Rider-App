export interface Swarm {
  swarm_id;
  speed;
  position;
  participants;
    included_trips: string[];
    swarm_intersection_geometry: string;
    

  // all the prediction based on the model
    ETA_swarm?;
}
