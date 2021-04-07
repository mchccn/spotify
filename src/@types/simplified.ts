import { NamedBase } from "./base";
import { AlbumRestrictionObject, CopyrightObject, ResumePointObject, TrackRestrictionObject } from "./meta/context";
import { ExternalUrlObject, ImageObject } from "./meta/describers";
import { PublicUserObject } from "./meta/users";
import { LinkedTrackObject, PlaylistTrackObject } from "./objects";
import { CountryCode } from "./utils";

export interface SimplifiedAlbumObject extends NamedBase {
    album_group: "album" | "single" | "compilation" | "appears_on";
    album_type: "album" | "single" | "compilation";
    artists: SimplifiedArtistObject[];
    available_markets: CountryCode[];
    external_urls: ExternalUrlObject;
    images: ImageObject[];
    release_date: string;
    release_date_precision: string;
    restrictions: AlbumRestrictionObject;
    type: "album";
}

export interface SimplifiedArtistObject extends NamedBase {
    external_urls: ExternalUrlObject;
    type: "artist";
}

export interface SimplifiedShowObject extends NamedBase {
    available_markets: CountryCode[];
    copyrights: CopyrightObject[];
    description: string;
    explicit: boolean;
    external_urls: ExternalUrlObject;
    images: ImageObject[];
    is_externally_hosted: boolean;
    languages: string[];
    media_type: string;
    publisher: string;
    type: "show";
}

export interface SimplifiedTrackObject extends NamedBase {
    artists: SimplifiedArtistObject[];
    available_markets: CountryCode[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrlObject;
    is_local: boolean;
    is_playable: boolean;
    linked_from: LinkedTrackObject;
    preview_url: string;
    restrictions: TrackRestrictionObject;
    track_number: number;
    type: "track";
}

export interface SimplifiedPlaylistObject extends NamedBase {
    collaborative: boolean;
    description: string | null;
    external_urls: ExternalUrlObject;
    images: ImageObject[];
    owner: PublicUserObject;
    public: boolean | null;
    snapshot_id: string;
    tracks: PlaylistTrackObject[];
    type: "playlist";
}

export interface SimplifiedEpisodeObject extends NamedBase {
    audio_preview_url: string;
    description: string;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrlObject;
    images: ImageObject[];
    is_externally_hosted: boolean;
    is_playable: boolean;
    language: string;
    languages: string[];
    release_date: string;
    release_date_precision: string;
    resume_point: ResumePointObject;
    type: "episode";
}
