import { ArtistObject } from "../objects";

export interface ArtistsMultipleArtistsResponse {
    artists: (ArtistObject | null)[];
}
