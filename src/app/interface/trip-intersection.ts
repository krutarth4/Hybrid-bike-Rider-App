export interface TripIntersection {
    id?:                    string;
    intersecting_trip_ids?: string[]; // !the key is still not added but in documentation present [Backend+ documentation error]
    expected_swarm_id:     string;
    distance:              number;
    intersections: string[];
    foreign_trip_id?: string; // another format for trip intersections for GET/trip
    trip_intersection_id?: string;
}
