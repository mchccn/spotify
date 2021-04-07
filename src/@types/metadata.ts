import { ResumePointObject, TrackRestrictionObject } from "./meta/context";
import { ExternalIdObject, ExternalUrlObject, ImageObject } from "./meta/describers";
import { PublicUserObject } from "./meta/users";
import { ArtistObject } from "./objects";
import { SimplifiedAlbumObject, SimplifiedShowObject } from "./simplified";
import { CountryCode } from "./utils";

export interface LinkedTrackObject {
    external_urls: ExternalUrlObject;
    href: string;
    id: string;
    type: "track";
    uri: string;
}

export interface PlaylistTrackObject {
    added_at: string;
    added_by: PublicUserObject;
    is_local: boolean;
    track: TrackObject | EpisodeObject;
}

export interface TrackObject {
    album: SimplifiedAlbumObject;
    artists: ArtistObject;
    available_markets: CountryCode[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIdObject;
    external_urls: ExternalUrlObject;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    linked_from: any;
    name: string;
    popularity: number;
    preview_url: string;
    restrictions: TrackRestrictionObject;
    track_number: number;
    type: "track";
    uri: string;
}

export interface EpisodeObject {
    audio_preview_url: string;
    description: string;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrlObject;
    href: string;
    id: string;
    image: ImageObject[];
    is_externally_hosted: boolean;
    is_playable: boolean;
    language: string;
    languages: string[];
    name: string;
    release_date: string;
    release_date_precision: string;
    resume_point: ResumePointObject;
    show: SimplifiedShowObject;
    type: "episode";
    uri: string;
}
