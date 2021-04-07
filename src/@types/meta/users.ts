import { CountryCode } from "../utils";
import { ExternalUrlObject, FollowersObject, ImageObject } from "./describers";

export interface ExplicitContentSettingsObject {
    filter_enabled: boolean;
    filter_locked: boolean;
}

export interface PublicUserObject {
    display_name: string | null;
    external_urls: ExternalUrlObject;
    followers: FollowersObject;
    href: string;
    id: string;
    images: ImageObject[];
    type: "user";
    uri: string;
}

export interface PrivateUserObject extends PublicUserObject {
    country: CountryCode;
    email: string;
    explicit_content: ExplicitContentSettingsObject;
    product: string;
}
