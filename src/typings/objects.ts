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

export interface AudioFeaturesObject {
    acousticness: number;
    analysis_url: string;
    danceability: number;
    duration_ms: number;
    energy: number;
    id: string;
    instrumentalness: number;
    key: number;
    liveness: number;
    loudness: number;
    mode: number;
    speechiness: number;
    tempo: number;
    time_signature: number;
    track_href: string;
    type: "audio_features";
    uri: string;
    valence: number;
}

export interface AudioAnalysisObject {
    bars: {
        start: number;
        duration: number;
        confidence: number;
    }[];
    beats: {
        start: number;
        duration: number;
        confidence: number;
    }[];
    meta: {
        analyzer_version: string;
        platform: string;
        detailed_status: string;
        status_code: number;
        timestamp: number;
        analysis_time: number;
        input_process: string;
    };
    sections: {
        start: number;
        duration: number;
        confidence: number;
        loudness: number;
        tempo: number;
        tempo_confidence: number;
        key: number;
        key_confidence: number;
        mode: number;
        mode_confidence: number;
        time_signature: number;
        time_signature_confidence: number;
    }[];
    segments: {
        start: number;
        duration: number;
        confidence: number;
        loudness_start: number;
        loudness_max_time: number;
        loudness_max: number;
        loudness_end: number;
        pitches: number[];
        timbre: number[];
    }[];
    tatums: {
        start: number;
        duration: number;
        confidence: number;
    }[];
    track: {
        duration: number;
        sample_md5: number;
        offset_seconds: number;
        window_seconds: number;
        analysis_sample_rate: number;
        analysis_channels: number;
        end_of_fade_in: number;
        start_of_fade_out: number;
        loudness: number;
        tempo: number;
        tempo_confidence: number;
        time_signature: number;
        time_signature_confidence: number;
        key: number;
        key_confidence: number;
        mode: number;
        mode_confidence: number;
        codestring: string;
        code_version: number;
        echoprintstring: string;
        echoprint_version: number;
        synchstring: string;
        synch_version: number;
        rhythmstring: string;
        rhythm_version: number;
    };
}
