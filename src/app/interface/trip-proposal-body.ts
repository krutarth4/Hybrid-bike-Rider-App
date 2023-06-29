import { Destination } from "./destination";

export interface TripProposalBody {
    start_point: Destination;
    end_point:   Destination;
}
