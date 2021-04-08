import { ArtistObject, TrackObject } from "../objects";

export interface ArtistsMultipleArtistsResponse {
    artists: (ArtistObject | null)[];
}

export interface ArtistsSingleArtistResponse extends ArtistObject {}

export interface ArtistsTopTracksResponse {
    tracks: TrackObject[];
}
