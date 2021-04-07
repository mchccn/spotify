import { PagingObject } from "./meta/context";
import { TrackObject } from "./metadata";
import { AlbumObject, ArtistObject, CategoryObject, EpisodeObject, PlaylistObject, RecommendationsObject, ShowObject } from "./objects";
import { SimplifiedAlbumObject, SimplifiedPlaylistObject } from "./simplified";
import { OptionalMessage } from "./utils";

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

export interface BrowseNewReleasesResponse extends OptionalMessage {
    albums: PagingObject<SimplifiedAlbumObject>;
}

export interface BrowseFeaturedPlaylistsResponse extends OptionalMessage {
    playlists: PagingObject<SimplifiedPlaylistObject>;
}

export interface BrowseAllCategoriesResponse {
    categories: PagingObject<CategoryObject>;
}

export interface BrowseCategoryResponse extends CategoryObject {}

export interface BrowseCategoryPlaylistsResponse {
    playlists: PagingObject<SimplifiedPlaylistObject>;
}

export interface BrowseRecommendationGenresResponse {
    genres: string[];
}

export interface BrowseRecommendationsResponse extends RecommendationsObject {}
