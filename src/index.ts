import { config as dotenv } from "dotenv";
import Spotify from "./Spotify";

dotenv();

export * from "./typings/auth";
export * from "./typings/base";
export * from "./typings/meta/context";
export * from "./typings/meta/describers";
export * from "./typings/meta/users";
export * from "./typings/objects";
export * from "./typings/res/albums";
export * from "./typings/res/artists";
export * from "./typings/res/auth";
export * from "./typings/res/browse";
export * from "./typings/res/episodes";
export * from "./typings/res/search";
export * from "./typings/res/shows";
export * from "./typings/res/tracks";
export * from "./typings/search";
export * from "./typings/simplified";
export * from "./typings/utils";

export default Spotify;
