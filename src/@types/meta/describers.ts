export interface ExternalUrlObject {
    spotify: string;
}

export interface FollowersObject {
    href: string | null;
    total: number;
}

export interface ExternalIdObject {
    ean: string;
    isrc: string;
    upc: string;
}

export interface ImageObject {
    height: number;
    width: number;
    url: string;
}
