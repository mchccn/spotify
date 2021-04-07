import Logger from "@aeroware/logger";
import btoa from "btoa";
import fetch from "node-fetch";
import { inspect } from "util";
import { SpotifyCredentials } from "./@types/auth";
import { SearchIncludeExternal, SearchLimit, SearchMarket, SearchOffset, SearchType } from "./@types/search";
import { urlencoded } from "./utils";

export default class Spotify {
    private credentials: SpotifyCredentials;
    private accessToken?: string;

    private logger = new Logger("spotify");

    constructor(credentials: SpotifyCredentials) {
        this.credentials = credentials;
    }

    async login() {
        const { clientId, clientSecret } = this.credentials;

        const data = {
            grant_type: "client_credentials",
        };

        const body = urlencoded(data);

        const res = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
            },
            body,
        });

        const json = await res.json();

        console.log(json);

        if (json.error) return this.logger.error(`Error logging in: '${json.error}'`);

        this.accessToken = json.access_token;

        setTimeout(async () => {
            this.accessToken = await this.login();
        }, json.expires_in * 1000 * 0.99);

        return json.access_token;
    }

    async search(
        query: string,
        types: SearchType[],
        options?: {
            market?: SearchMarket;
            limit?: SearchLimit;
            offset?: SearchOffset;
            includeExternal?: SearchIncludeExternal;
        }
    ) {
        if (!this.accessToken) return this.logger.error(`No access token available`);

        const res = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=${types.toString()}${options?.market ? `&market=${options.market}` : ""}${
                options?.limit ? `&limit=${options.limit}` : ""
            }${options?.offset ? `&offset=${options.offset}` : ""}${options?.includeExternal ? `&include_external=${options.includeExternal}` : ""}`,
            {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            }
        );

        const json = await res.json();

        console.log(inspect(json.playlists, true, 4, true));

        return json.artists;
    }
}
