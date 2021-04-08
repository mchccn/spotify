import fetch from "node-fetch";
import { URL } from "url";
import { baseURL, logger } from "../constants";
import Spotify from "../Spotify";
import { ErrorObject } from "../typings/meta/context";
import { EpisodesMultipleEpisodesResponse, EpisodesSingleEpisodeResponse } from "../typings/res/episodes";
import { SearchMarket } from "../typings/search";

export default class Episodes {
    private static readonly baseURL = `${baseURL}/episodes`;

    private client: Spotify;

    public constructor(client: Spotify) {
        this.client = client;
    }

    public async get(ids: string, options?: { market?: SearchMarket }): Promise<EpisodesSingleEpisodeResponse | undefined>;
    public async get(ids: string[], options?: { market?: SearchMarket }): Promise<EpisodesMultipleEpisodesResponse["episodes"] | undefined>;
    public async get(ids: string | string[], options?: { market?: SearchMarket }) {
        const url = new URL(`${Episodes.baseURL}${typeof ids === "string" ? `/${ids}` : ""}`);

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
            const json: EpisodesSingleEpisodeResponse & ErrorObject = await res.json();

            if (!res.ok) return logger.error(`Error fetching episode: ${json.error.message}`) as undefined;

            return json as EpisodesSingleEpisodeResponse;
        }

        const json: EpisodesMultipleEpisodesResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching episodes: ${json.error.message}`) as undefined;

        return (json as EpisodesMultipleEpisodesResponse).episodes;
    }
}
