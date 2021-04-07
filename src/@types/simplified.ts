import { AlbumRestrictionObject, CopyrightObject, TrackRestrictionObject } from "./meta/context";
import { ExternalUrlObject, ImageObject } from "./meta/describers";
import { LinkedTrackObject } from "./metadata";
import { CountryCode } from "./utils";

export interface SimplifiedAlbumObject {
    album_group: "album" | "single" | "compilation" | "appears_on";
    album_type: "album" | "single" | "compilation";
    artists: SimplifiedArtistObject[];
    available_markets: CountryCode[];
    external_urls: ExternalUrlObject;
    href: string;
    id: string;
    images: ImageObject[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: AlbumRestrictionObject;
    type: "album";
    uri: string;
}

export interface SimplifiedArtistObject {
    external_urls: ExternalUrlObject;
    href: string;
    id: string;
    name: string;
    type: "artist";
    uri: string;
}

export interface SimplifiedShowObject {
    available_markets: CountryCode[];
    copyrights: CopyrightObject[];
    description: string;
    explicit: boolean;
    external_urls: ExternalUrlObject;
    href: string;
    id: string;
    images: ImageObject[];
    is_externally_hosted: boolean;
    languages: string[];
    media_type: string;
    name: string;
    publisher: string;
    type: "show";
    uri: string;
}

export interface SimplifiedTrackObject {
    artists: SimplifiedArtistObject[];
    available_markets: CountryCode[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrlObject;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    linked_from: LinkedTrackObject;
    name: string;
    preview_url: string;
    restrictions: TrackRestrictionObject;
    track_number: number;
    type: "track";
    uri: string;
}
