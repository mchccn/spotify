import { PagingObject } from "../meta/context";
import { PublicUserObject } from "../meta/users";
import { AlbumObject, ArtistObject, EpisodeObject, PlaylistObject, ShowObject, TrackObject } from "../objects";
import { CountryCode } from "../utils";

export interface SearchResponse {
    artists?: PagingObject<ArtistObject>;
    playlists?: PagingObject<PlaylistObject>;
    albums?: PagingObject<AlbumObject>;
    tracks?: PagingObject<TrackObject>;
    shows?: PagingObject<ShowObject>;
    episodes?: PagingObject<EpisodeObject>;
}

export interface MarketsResponse {
    markets: CountryCode[];
}

export interface UsersResponse extends PublicUserObject {}
