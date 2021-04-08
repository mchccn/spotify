import btoa from "btoa";
import fetch from "node-fetch";
import { URL } from "url";
import { SpotifyCredentials } from "./typings/auth";
import { ErrorObject } from "./typings/meta/context";
import { LoginErrorResponse, LoginResponse } from "./typings/res/auth";
import { SearchResponse } from "./typings/res/search";
import { SearchIncludeExternal, SearchLimit, SearchMarket, SearchOffset, SearchType } from "./typings/search";
import Artists from "./classes/Artists";
import Browser from "./classes/Browser";
import { baseURL, logger } from "./constants";
import { urlencoded } from "./utils";

export default class Spotify {
    private static readonly baseURL = baseURL;

    private credentials: SpotifyCredentials;
    private accessToken?: string;

    public readonly browse = new Browser(this);
    public readonly artists = new Artists(this);

    public constructor(credentials: SpotifyCredentials) {
        this.credentials = credentials;
    }

    public async login() {
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

        const json: LoginResponse & LoginErrorResponse = await res.json();

        if (json.error) return logger.error(`Error logging in: '${json.error}'`) as undefined;

        this.accessToken = json.access_token;

        setTimeout(async () => {
            this.accessToken = await this.login();
        }, json.expires_in * 1000 * 0.99);

        return json.access_token;
    }

    public async search(
        query: string,
        types: [SearchType, ...SearchType[]],
        options?: {
            market?: SearchMarket;
            limit?: SearchLimit;
            offset?: SearchOffset;
            includeExternal?: SearchIncludeExternal;
        }
    ) {
        if (!this.accessToken) return logger.error(`No access token available`) as undefined;

        const url = new URL(`${Spotify.baseURL}/search?q=${encodeURIComponent(query)}&type=${[...new Set(types)].toString()}`);

        if (options) {
            if (options.market) url.searchParams.set("market", options.market);
            if (options.limit) url.searchParams.set("limit", options.limit.toString());
            if (options.offset) url.searchParams.set("offset", options.offset.toString());
            if (options.includeExternal) url.searchParams.set("include_external", options.includeExternal);
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
            },
        });

        const json: SearchResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error searching: ${json.error.message}`) as undefined;

        return json as SearchResponse;
    }

    public get token() {
        return this.accessToken;
    }
}
