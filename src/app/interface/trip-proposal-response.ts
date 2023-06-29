import { Destination } from "./destination";
import { Trip } from "./trip";

export interface TripProposalResponse {
    origin:      Destination;
    destination: Destination;
    router:      string;
    trips:       Trip[];
}
