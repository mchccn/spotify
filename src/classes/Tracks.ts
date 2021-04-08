import fetch from "node-fetch";
import { URL } from "url";
import { baseURL, logger } from "../constants";
import Spotify from "../Spotify";
import { ErrorObject } from "../typings/meta/context";
import { AudioAnalysisObject } from "../typings/objects";
import {
    TracksMultipleTracksAudioFeaturesResponse,
    TracksMultipleTracksResponse,
    TracksSingleTrackAudioFeatureResponse,
    TracksSingleTrackResponse,
} from "../typings/res/tracks";
import { SearchMarket } from "../typings/search";

export default class Tracks {
    private static readonly baseURL = `${baseURL}/tracks`;

    private client: Spotify;

    public constructor(client: Spotify) {
        this.client = client;
    }

    public async get(ids: string, options?: { market?: SearchMarket }): Promise<TracksSingleTrackResponse | undefined>;
    public async get(ids: string[], options?: { market?: SearchMarket }): Promise<TracksMultipleTracksResponse["tracks"] | undefined>;
    public async get(ids: string | string[], options?: { market?: SearchMarket }) {
        const url = new URL(`${Tracks.baseURL}${typeof ids === "string" ? `/${ids}` : ""}`);

        if (typeof ids !== "string") url.searchParams.set("ids", ids.toString());

        if (options) {
            if (options.market) url.searchParams.set("market", options.market);
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        if (typeof ids === "string") {
            const json: TracksSingleTrackResponse & ErrorObject = await res.json();

            if (!res.ok) return logger.error(`Error fetching track: ${json.error.message}`) as undefined;

            return json as TracksSingleTrackResponse;
        }

        const json: TracksMultipleTracksResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching tracks: ${json.error.message}`) as undefined;

        return (json as TracksMultipleTracksResponse).tracks;
    }

    public async audioFeatures(ids: string): Promise<TracksSingleTrackAudioFeatureResponse | undefined>;
    public async audioFeatures(ids: string[]): Promise<TracksMultipleTracksAudioFeaturesResponse["audio_features"] | undefined>;
    public async audioFeatures(ids: string | string[]) {
        const url = new URL(`${baseURL}/audio-features${typeof ids === "string" ? `/${ids}` : ""}`);

        if (typeof ids !== "string") url.searchParams.set("ids", ids.toString());

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        if (typeof ids === "string") {
            const json: TracksSingleTrackAudioFeatureResponse & ErrorObject = await res.json();

            if (!res.ok) return logger.error(`Error fetching audio feature: ${json.error.message}`) as undefined;

            return json as TracksSingleTrackAudioFeatureResponse;
        }

        const json: TracksMultipleTracksAudioFeaturesResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching audio features: ${json.error.message}`) as undefined;

        return (json as TracksMultipleTracksAudioFeaturesResponse).audio_features;
    }

    public async audioAnalysis(id: string) {
        const url = new URL(`${baseURL}/audio-analysis/${id}`);

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        const json: AudioAnalysisObject & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching audio analysis: ${json.error.message}`) as undefined;

        return json;
    }
}
