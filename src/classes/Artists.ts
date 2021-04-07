import fetch from "node-fetch";
import { URL } from "url";
import { ErrorObject } from "../@types/meta/context";
import { ArtistsMultipleArtistsResponse } from "../@types/res/artists";
import { baseURL, logger } from "../constants";
import Spotify from "../Spotify";

export default class Artists {
    private static readonly baseURL = `${baseURL}/artists`;

    private client: Spotify;

    public constructor(client: Spotify) {
        this.client = client;
    }

    public async get(ids: string | string[]) {
        const url = new URL(Artists.baseURL);

        url.searchParams.set("ids", ids.toString());

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        const json: ArtistsMultipleArtistsResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching artists: ${json.error.message}`) as undefined;

        return (json as ArtistsMultipleArtistsResponse).artists;
    }
}
