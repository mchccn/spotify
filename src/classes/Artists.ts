import { baseURL } from "../constants";
import Spotify from "../Spotify";

export default class Artists {
    private static readonly baseURL = `${baseURL}/artists`;

    private client: Spotify;

    public constructor(client: Spotify) {
        this.client = client;
    }
}
