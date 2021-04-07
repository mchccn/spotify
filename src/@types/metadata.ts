import { Base, NamedBase } from "./base";
import { ResumePointObject, TrackRestrictionObject } from "./meta/context";
import { ExternalIdObject, ExternalUrlObject, ImageObject } from "./meta/describers";
import { PublicUserObject } from "./meta/users";
import { ArtistObject } from "./objects";
import { SimplifiedAlbumObject, SimplifiedShowObject } from "./simplified";
import { CountryCode, Popularity } from "./utils";

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

export interface TrackObject extends NamedBase {
    album: SimplifiedAlbumObject;
    artists: ArtistObject;
    available_markets: CountryCode[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIdObject;
    external_urls: ExternalUrlObject;
    is_local: boolean;
    is_playable: boolean;
    linked_from: any;
    popularity: Popularity;
    preview_url: string;
    restrictions: TrackRestrictionObject;
    track_number: number;
    type: "track";
}

export interface EpisodeObject extends NamedBase {
    audio_preview_url: string;
    description: string;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrlObject;
    image: ImageObject[];
    is_externally_hosted: boolean;
    is_playable: boolean;
    language: string;
    languages: string[];
    release_date: string;
    release_date_precision: string;
    resume_point: ResumePointObject;
    show: SimplifiedShowObject;
    type: "episode";
}
