import Spotify from "./Spotify";
import { SpotifyCredentials } from "./types";

import { config as dotenv } from "dotenv";

dotenv();

const client = new Spotify({
    clientId: process.env.CLIENT_ID!,
    clientSecret: process.env.CLIENT_SECRET!,
});

client.login();

export { SpotifyCredentials };
export default Spotify;
