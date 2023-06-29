import { TripIntersection } from "./trip-intersection";
import { User } from "./user";

export interface GetTripIntersecionsResponse {
    users:             User[];
    trip_intersection: TripIntersection;
}
