import { TripIntersection } from "./trip-intersection";

export interface Trip {
    trip_id:            string;
    duration:           number;
    distance:           number;
    status:             string;
    geometry:           string;
    legs:               any;
    trip_intersections: TripIntersection[];
}
