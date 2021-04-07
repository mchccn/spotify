import { CopyrightObject } from "./meta/context";
import { ExternalIdObject, FollowersObject, ImageObject } from "./meta/describers";
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
