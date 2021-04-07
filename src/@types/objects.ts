import { ExternalUrlObject, FollowersObject, ImageObject } from "./meta/describers";
import { PublicUserObject } from "./meta/users";
import { PlaylistTrackObject } from "./metadata";

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

export interface Playlist {
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
