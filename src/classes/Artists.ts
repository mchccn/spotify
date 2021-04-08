import fetch from "node-fetch";
import { URL } from "url";
import { baseURL, logger } from "../constants";
import Spotify from "../Spotify";
import { ErrorObject } from "../typings/meta/context";
import { ArtistsMultipleArtistsResponse, ArtistsSingleArtistResponse, ArtistsTopTracksResponse } from "../typings/res/artists";
import { SearchLimit, SearchMarket } from "../typings/search";
import { AlbumGroup } from "../typings/utils";

export default class Artists {
    private static readonly baseURL = `${baseURL}/artists`;

    private client: Spotify;

    public constructor(client: Spotify) {
        this.client = client;
    }

    public async get(ids: string): Promise<ArtistsSingleArtistResponse | undefined>;
    public async get(ids: string[]): Promise<ArtistsMultipleArtistsResponse["artists"] | undefined>;
    public async get(ids: string | string[]) {
        const url = new URL(`${Artists.baseURL}${typeof ids === "string" ? `/${ids}` : ""}`);

        if (typeof ids !== "string") url.searchParams.set("ids", ids.toString());

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        if (typeof ids === "string") {
            const json: ArtistsSingleArtistResponse & ErrorObject = await res.json();

            if (!res.ok) return logger.error(`Error fetching artist: ${json.error.message}`) as undefined;

            return json as ArtistsSingleArtistResponse;
        }

        const json: ArtistsMultipleArtistsResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching artists: ${json.error.message}`) as undefined;

        return (json as ArtistsMultipleArtistsResponse).artists;
    }

    public async topTracks(id: string, options?: { market?: SearchMarket }) {
        const url = new URL(`${Artists.baseURL}/${id}/top-tracks`);

        if (options) {
            if (options.market) url.searchParams.set("market", options.market);
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        const json: ArtistsTopTracksResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching top tracks: ${json.error.message}`) as undefined;

        return (json as ArtistsTopTracksResponse).tracks;
    }

    public async albums(id: string, options?: { include?: AlbumGroup[]; market?: SearchMarket; limit: SearchLimit; offset?: number }) {
        const url = new URL(`${Artists.baseURL}/${id}/albums`);

        if (options) {
            if (options.include) url.searchParams.set("include_groups", options.include.toString());
            if (options.market) url.searchParams.set("market", options.market);
            if (options.limit) url.searchParams.set("limit", options.limit.toString());
            if (options.offset) url.searchParams.set("offset", options.offset.toString());
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        const json: ArtistsTopTracksResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching top tracks: ${json.error.message}`) as undefined;

        return (json as ArtistsTopTracksResponse).tracks;
    }
}
