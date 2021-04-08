import { Base } from "../base";
import { CountryCode } from "../utils";
import { ExternalUrlObject, FollowersObject, ImageObject } from "./describers";

export interface ExplicitContentSettingsObject {
    filter_enabled: boolean;
    filter_locked: boolean;
}

export interface PublicUserObject extends Base {
    display_name: string | null;
    external_urls: ExternalUrlObject;
    followers: FollowersObject;
    images: ImageObject[];
    type: "user";
}

export interface PrivateUserObject extends PublicUserObject {
    country: CountryCode;
    email: string;
    explicit_content: ExplicitContentSettingsObject;
    product: string;
}
