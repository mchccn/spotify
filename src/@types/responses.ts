import { SearchType } from "src";
import { TrackObject } from "./metadata";
import { AlbumObject, ArtistObject, PlaylistObject, ShowObject } from "./objects";

export interface LoginResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
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

export interface SearchResponse<Types extends [SearchType, ...SearchType[]]> {
    artists?: SearchResponseObject<ArtistObject>;
    playlists?: SearchResponseObject<PlaylistObject>;
    albums?: SearchResponseObject<AlbumObject>;
    tracks?: SearchResponseObject<TrackObject>;
    shows?: SearchResponseObject<ShowObject>;
    // episodes?:
}
