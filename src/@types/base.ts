export interface Base {
    href: string;
    id: string;
    uri: string;
}

export interface NamedBase extends Base {
    name: string;
}
