import fetch from "node-fetch";
import { URL } from "url";
import { baseURL, logger } from "../constants";
import Spotify from "../Spotify";
import { ErrorObject } from "../typings/meta/context";
import { AlbumsMultipleAlbumsResponse, AlbumsSingleAlbumResponse } from "../typings/res/albums";
import { SearchLimit, SearchMarket, SearchOffset } from "../typings/search";

export default class Albums {
    private static readonly baseURL = `${baseURL}/albums`;

    private client: Spotify;

    public constructor(client: Spotify) {
        this.client = client;
    }

    public async get(ids: string, options?: { market?: SearchMarket }): Promise<AlbumsSingleAlbumResponse | undefined>;
    public async get(ids: string[], options?: { market?: SearchMarket }): Promise<AlbumsMultipleAlbumsResponse["albums"] | undefined>;
    public async get(ids: string | string[], options?: { market?: SearchMarket }) {
        const url = new URL(`${Albums.baseURL}${typeof ids === "string" ? `/${ids}` : ""}`);

        if (typeof ids !== "string") url.searchParams.set("ids", ids.toString());

        if (options) {
            if (options.market) url.searchParams.set("market", options.market);
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        if (typeof ids === "string") {
            const json: AlbumsSingleAlbumResponse & ErrorObject = await res.json();

            if (!res.ok) return logger.error(`Error fetching album: ${json.error.message}`) as undefined;

            return json as AlbumsSingleAlbumResponse;
        }

        const json: AlbumsMultipleAlbumsResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching albums: ${json.error.message}`) as undefined;

        return (json as AlbumsMultipleAlbumsResponse).albums;
    }

    public async tracks(
        id: string,
        options?: {
            market?: SearchMarket;
            limit?: SearchLimit;
            offset?: SearchOffset;
        }
    ) {
        const url = new URL(`${Albums.baseURL}/${id}/tracks`);

        if (options) {
            if (options.market) url.searchParams.set("market", options.market);
            if (options.limit) url.searchParams.set("limit", options.limit.toString());
            if (options.offset) url.searchParams.set("offset", options.offset.toString());
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        const json: AlbumsMultipleAlbumsResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching albums: ${json.error.message}`) as undefined;

        return (json as AlbumsMultipleAlbumsResponse).albums;
    }
}
