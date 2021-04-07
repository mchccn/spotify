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

export interface SearchResponseObject<Item> {
    href: string;
    items: Item[];
    limit: number;
    next: any;
    offset: number;
    previous: any;
    total: number;
}

export interface SearchResponse {
    artists?: SearchResponseObject<ArtistObject>;
    playlists?: SearchResponseObject<PlaylistObject>;
    albums?: SearchResponseObject<AlbumObject>;
    tracks?: SearchResponseObject<TrackObject>;
    shows?: SearchResponseObject<ShowObject>;
    episodes?: SearchResponseObject<EpisodeObject>;
}
