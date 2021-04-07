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
export * from "./@types/meta/context";
export * from "./@types/meta/describers";
export * from "./@types/meta/users";
export * from "./@types/objects";
export * from "./@types/res/artists";
export * from "./@types/res/auth";
export * from "./@types/res/browse";
export * from "./@types/res/search";
export * from "./@types/search";
export * from "./@types/simplified";
export * from "./@types/utils";

export default Spotify;
