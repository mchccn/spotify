import { PagingObject } from "./meta/context";
import { TrackObject } from "./metadata";
import { AlbumObject, ArtistObject, EpisodeObject, PlaylistObject, ShowObject } from "./objects";

export interface LoginResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export interface LoginErrorResponse {
    error: string;
    message?: string;
}

export interface SearchResponse {
    artists?: PagingObject<ArtistObject>;
    playlists?: PagingObject<PlaylistObject>;
    albums?: PagingObject<AlbumObject>;
    tracks?: PagingObject<TrackObject>;
    shows?: PagingObject<ShowObject>;
    episodes?: PagingObject<EpisodeObject>;
}
