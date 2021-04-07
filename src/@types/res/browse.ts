import { PagingObject } from "../meta/context";
import { CategoryObject, RecommendationsObject } from "../objects";
import { SimplifiedAlbumObject, SimplifiedPlaylistObject } from "../simplified";
import { OptionalMessage } from "../utils";

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
