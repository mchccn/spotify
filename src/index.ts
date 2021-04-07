import { config as dotenv } from "dotenv";
import Spotify from "./Spotify";

dotenv();

(async () => {
    const client = new Spotify({
        clientId: process.env.CLIENT_ID!,
        clientSecret: process.env.CLIENT_SECRET!,
    });

    await client.login();
})();

export * from "./@types/auth";
export * from "./@types/base";
export * from "./@types/objects";
export * from "./@types/search";

export default Spotify;
