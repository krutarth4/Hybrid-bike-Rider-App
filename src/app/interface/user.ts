import { Destination } from "./destination";

export interface User {
    
        device_id:          string;
        position:           Destination;
        position_timestamp: any;
        speed:              number;
        swarm_id?: string; // inconsistency due to bad documentation 
        trip_id?: string
        active_trip_id?: string
    
}
