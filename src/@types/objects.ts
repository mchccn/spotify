import { AlbumRestrictionObject, CopyrightObject } from "./meta/context";
import { ExternalIdObject, ExternalUrlObject, FollowersObject, ImageObject } from "./meta/describers";
import { PublicUserObject } from "./meta/users";
import { PlaylistTrackObject } from "./metadata";
import { SimplifiedTrackObject } from "./simplified";
import { CountryCode } from "./utils";

export interface ArtistObject {
    external_urls: ExternalUrlObject;
    followers: FollowersObject;
    genres: string[];
    href: string;
    id: string;
    images: ImageObject[];
    name: string;
    popularity: 0;
    type: "artist";
    uri: string;
}

export interface PlaylistObject {
    collaborative: boolean;
    description: string | null;
    external_urls: ExternalUrlObject;
    followers: FollowersObject;
    href: string;
    id: string;
    images: ImageObject[];
    name: string;
    owner: PublicUserObject;
    public: boolean | null;
    snapshot_id: string;
    tracks: PlaylistTrackObject[];
    type: "playlist";
    uri: string;
}

export interface AlbumObject {
    album_type: "album" | "single" | "compilation";
    artists: ArtistObject[];
    available_markets: CountryCode[];
    copyrights: CopyrightObject[];
    external_ids: ExternalIdObject;
    external_urls: ExternalUrlObject;
    genres: string[];
    href: string;
    id: string;
    images: ImageObject[];
    label: string;
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    restrictions: AlbumRestrictionObject;
    tracks: SimplifiedTrackObject[];
    type: "album";
    uri: string;
}

export interface ShowObject {
    available_markets: CountryCode[];
    copyrights: CopyrightObject[];
    description: string;
    // episodes
    // A list of the show’s episodes.	Array[SimplifiedEpisodeObject]
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
