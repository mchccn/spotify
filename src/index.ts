import { config as dotenv } from "dotenv";
import { SpotifyCredentials } from "./@types/auth";
import { SearchLimit, SearchType } from "./@types/search";
import Spotify from "./Spotify";

dotenv();

(async () => {
    const client = new Spotify({
        clientId: process.env.CLIENT_ID!,
        clientSecret: process.env.CLIENT_SECRET!,
    });

    await client.login();
})();

export { SpotifyCredentials, SearchType, SearchLimit };

export default Spotify;
