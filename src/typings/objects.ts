import { Base } from "./base";
import { CopyrightObject, RecommendationSeedObject } from "./meta/context";
import { ExternalIdObject, ExternalUrlObject, FollowersObject, ImageObject } from "./meta/describers";
import { PublicUserObject } from "./meta/users";
import {
    SimplifiedAlbumObject,
    SimplifiedArtistObject,
    SimplifiedEpisodeObject,
    SimplifiedPlaylistObject,
    SimplifiedShowObject,
    SimplifiedTrackObject,
} from "./simplified";
import { Popularity } from "./utils";

export interface ArtistObject extends SimplifiedArtistObject {
    followers: FollowersObject;
    genres: string[];
    images: ImageObject[];
    popularity: 0;
}

export interface PlaylistObject extends SimplifiedPlaylistObject {
    followers: FollowersObject;
}

export interface AlbumObject extends SimplifiedAlbumObject {
    artists: ArtistObject[];
    copyrights: CopyrightObject[];
    external_ids: ExternalIdObject;
    genres: string[];
    label: string;
    popularity: Popularity;
    tracks: SimplifiedTrackObject[];
}

export interface ShowObject extends SimplifiedShowObject {
    episodes: SimplifiedEpisodeObject[];
}

export interface EpisodeObject extends SimplifiedEpisodeObject {
    show: SimplifiedShowObject;
}

export interface TrackObject extends SimplifiedTrackObject {
    album: SimplifiedAlbumObject;
    external_ids: ExternalIdObject;
    popularity: Popularity;
}

export interface CategoryObject {
    href: string;
    icons: ImageObject[];
    id: string;
    name: string;
}

export interface RecommendationsObject {
    seeds: RecommendationSeedObject[];
    tracks: SimplifiedTrackObject[];
}

export interface LinkedTrackObject extends Base {
    external_urls: ExternalUrlObject;
    type: "track";
}

export interface PlaylistTrackObject {
    added_at: string;
    added_by: PublicUserObject;
    is_local: boolean;
    track: TrackObject | EpisodeObject;
}
