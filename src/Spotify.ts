import fetch from "node-fetch";
import btoa from "btoa";
import { SpotifyCredentials } from "./types";
import { urlencoded } from "./utils";

export default class Spotify {
    private credentials: SpotifyCredentials;
    private accessToken?: string;

    constructor(credentials: SpotifyCredentials) {
	this.credentials = credentials;
    }

    async login() {
	const { clientId, clientSecret } = this.credentials;

	const data = {
    	    "grant_type": "client_credentials",
	};

	const body = urlencoded(data);

	const res = await fetch("https://accounts.spotify.com/api/token", {
  	    method: "POST",
  	    headers: {
    		"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    		"Authorization": `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
  	    },
  	    body,
	});

	const json = await res.json();

	this.accessToken = json.access_token;

	setTimeout(async () => {
	    this.accessToken = await this.login();
	}, (json.expires_in * 1000) * 0.99);

	return json.access_token;
    }

    
}
