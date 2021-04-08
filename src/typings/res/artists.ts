import { PagingObject } from "../meta/context";
import { AlbumObject, ArtistObject, TrackObject } from "../objects";

export interface ArtistsMultipleArtistsResponse {
    artists: (ArtistObject | null)[];
}

export interface ArtistsSingleArtistResponse extends ArtistObject {}

export interface ArtistsTopTracksResponse {
    tracks: TrackObject[];
}

export interface ArtistsAlbumsResponse extends PagingObject<AlbumObject> {}

export interface ArtistsRelatedResponse {
    artists: ArtistObject[];
}
