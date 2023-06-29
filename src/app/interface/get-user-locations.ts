import { Position } from "./position";

export interface GetUserLocation {
    device_id:          string;
    trip_id:            string;
    position:           Position;
    position_timestamp: Date;
    speed:              number;
}

