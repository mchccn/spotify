import fetch from "node-fetch";
import { URL } from "url";
import { baseURL, logger } from "../constants";
import Spotify from "../Spotify";
import { ErrorObject } from "../typings/meta/context";
import { ShowsEpisodesResponse, ShowsMultipleShowsResponse, ShowsSingleShowResponse } from "../typings/res/shows";
import { SearchLimit, SearchMarket, SearchOffset } from "../typings/search";

export default class Shows {
    private static readonly baseURL = `${baseURL}/shows`;

    private client: Spotify;

    public constructor(client: Spotify) {
        this.client = client;
    }

    public async get(ids: string, options?: { market?: SearchMarket }): Promise<ShowsSingleShowResponse | undefined>;
    public async get(ids: string[], options?: { market?: SearchMarket }): Promise<ShowsMultipleShowsResponse["shows"] | undefined>;
    public async get(ids: string | string[], options?: { market?: SearchMarket }) {
        const url = new URL(`${Shows.baseURL}${typeof ids === "string" ? `/${ids}` : ""}`);

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
            const json: ShowsSingleShowResponse & ErrorObject = await res.json();

            if (!res.ok) return logger.error(`Error fetching show: ${json.error.message}`) as undefined;

            return json as ShowsSingleShowResponse;
        }

        const json: ShowsMultipleShowsResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching shows: ${json.error.message}`) as undefined;

        return (json as ShowsMultipleShowsResponse).shows;
    }

    public async episodes(
        id: string,
        options?: {
            market?: SearchMarket;
            limit?: SearchLimit;
            offset?: SearchOffset;
        }
    ) {
        const url = new URL(`${Shows.baseURL}/${id}/episodes`);

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

        const json: ShowsEpisodesResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching show episodes: ${json.error.message}`) as undefined;

        return json as ShowsEpisodesResponse;
    }
}
