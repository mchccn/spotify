import fetch from "node-fetch";
import { URL } from "url";
import { baseURL, logger } from "../constants";
import Spotify from "../Spotify";
import { ErrorObject } from "../typings/meta/context";
import {
    BrowseAllCategoriesResponse,
    BrowseCategoryPlaylistsResponse,
    BrowseCategoryResponse,
    BrowseFeaturedPlaylistsResponse,
    BrowseNewReleasesResponse,
    BrowseRecommendationGenresResponse,
    BrowseRecommendationsResponse,
} from "../typings/res/browse";
import { SearchLimit, SearchMarket } from "../typings/search";
import { CountryCode, Locale, OneToOneHundred } from "../typings/utils";

export default class Browser {
    private static readonly baseURL = `${baseURL}/browse`;

    private client: Spotify;

    public constructor(client: Spotify) {
        this.client = client;
    }

    public async newReleases(options?: { country?: CountryCode; limit?: SearchLimit; offset?: number }) {
        if (!this.client.token) return logger.error(`No access token available`) as undefined;

        const url = new URL(`${Browser.baseURL}/new-releases`);

        if (options) {
            if (options.country) url.searchParams.set("country", options.country);
            if (options.limit) url.searchParams.set("limit", options.limit.toString());
            if (options.offset) url.searchParams.set("offset", options.offset.toString());
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        const json: BrowseNewReleasesResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching new releases: ${json.message}`) as undefined;

        return json as BrowseNewReleasesResponse;
    }

    public async featuredPlaylists(options?: { country?: CountryCode; locale?: Locale; timestamp?: string; limit: SearchLimit; offset?: number }) {
        if (!this.client.token) return logger.error(`No access token available`) as undefined;

        const url = new URL(`${Browser.baseURL}/featured-playlists`);

        if (options) {
            if (options.country) url.searchParams.set("country", options.country);
            if (options.locale) url.searchParams.set("locale", options.locale);
            if (options.timestamp) url.searchParams.set("timestamp", options.timestamp);
            if (options.limit) url.searchParams.set("limit", options.limit.toString());
            if (options.offset) url.searchParams.set("offset", options.offset.toString());
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        const json: BrowseFeaturedPlaylistsResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching featured playlists: ${json.message}`) as undefined;

        return json as BrowseFeaturedPlaylistsResponse;
    }

    public async allCategories(options?: { country?: CountryCode; locale?: Locale; limit: SearchLimit; offset?: number }) {
        if (!this.client.token) return logger.error(`No access token available`) as undefined;

        const url = new URL(`${Browser.baseURL}/categories`);

        if (options) {
            if (options.country) url.searchParams.set("country", options.country);
            if (options.locale) url.searchParams.set("locale", options.locale);
            if (options.limit) url.searchParams.set("limit", options.limit.toString());
            if (options.offset) url.searchParams.set("offset", options.offset.toString());
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        const json: BrowseAllCategoriesResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching all categories: ${json.error.message}`) as undefined;

        return json as BrowseAllCategoriesResponse;
    }

    public async category(category: string, options?: { country?: CountryCode; locale?: Locale }) {
        if (!this.client.token) return logger.error(`No access token available`) as undefined;

        const url = new URL(`${Browser.baseURL}/categories/${category}`);

        if (options) {
            if (options.country) url.searchParams.set("country", options.country);
            if (options.locale) url.searchParams.set("locale", options.locale);
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        const json: BrowseCategoryResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching category: ${json.error.message}`) as undefined;

        return json as BrowseCategoryResponse;
    }

    public async categoryPlaylists(category: string, options?: { country?: CountryCode; limit: SearchLimit; offset?: number }) {
        if (!this.client.token) return logger.error(`No access token available`) as undefined;

        const url = new URL(`${Browser.baseURL}/categories/${category}/playlists`);

        if (options) {
            if (options.country) url.searchParams.set("country", options.country);
            if (options.limit) url.searchParams.set("limit", options.limit.toString());
            if (options.offset) url.searchParams.set("offset", options.offset.toString());
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        const json: BrowseCategoryPlaylistsResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching category playlists: ${json.error.message}`) as undefined;

        return (json as BrowseCategoryPlaylistsResponse).playlists;
    }

    public async recommendations(
        seeds: {
            artists?: string[];
            genres?: string[];
            tracks?: string[];
        },
        options?: {
            limit?: OneToOneHundred;
            market?: SearchMarket;
            minAcousticness?: number;
            maxAcousticness?: number;
            targetAcousticness?: number;
            minDanceability?: number;
            maxDanceability?: number;
            targetDanceability?: number;
            minDuration?: number;
            maxDuration?: number;
            targetDuration?: number;
            minEnergy?: number;
            maxEnergy?: number;
            targetEnergy?: number;
            minInstrumentalness?: number;
            maxInstrumentalness?: number;
            targetInstrumentalness?: number;
            minKey?: number;
            maxKey?: number;
            targetKey?: number;
            minLiveness?: number;
            maxLiveness?: number;
            targetLiveness?: number;
            minLoudness?: number;
            maxLoudness?: number;
            targetLoudness?: number;
            minMode?: number;
            maxMode?: number;
            targetMode?: number;
            minPopularity?: number;
            maxPopularity?: number;
            targetPopularity?: number;
            minSpeechiness?: number;
            maxSpeechiness?: number;
            targetSpeechiness?: number;
            minTempo?: number;
            maxTempo?: number;
            targetTempo?: number;
            minTimeSignature?: number;
            maxTimeSignature?: number;
            targetTimeSignature?: number;
            minValence?: number;
            maxValence?: number;
            targetValence?: number;
        }
    ) {
        if (!this.client.token) return logger.error(`No access token available`) as undefined;

        const url = new URL(`${Browser.baseURL}/recommendations`);

        if (seeds.artists?.length) url.searchParams.set("seed_artists", seeds.artists.toString());
        if (seeds.genres?.length) url.searchParams.set("seed_genres", seeds.genres.toString());
        if (seeds.tracks?.length) url.searchParams.set("seed_tracks", seeds.tracks.toString());

        if (options) {
            if (options.limit) url.searchParams.set("limit", options.limit.toString());
            if (options.market) url.searchParams.set("market", options.market);
            if (options.minAcousticness) url.searchParams.set("min_acousticness", options.minAcousticness.toString());
            if (options.maxAcousticness) url.searchParams.set("max_acousticness", options.maxAcousticness.toString());
            if (options.targetAcousticness) url.searchParams.set("target_acousticness", options.targetAcousticness.toString());
            if (options.minDanceability) url.searchParams.set("min_danceability", options.minDanceability.toString());
            if (options.maxDanceability) url.searchParams.set("max_danceability", options.maxDanceability.toString());
            if (options.targetDanceability) url.searchParams.set("target_danceability", options.targetDanceability.toString());
            if (options.minDuration) url.searchParams.set("min_duration_ms", options.minDuration.toString());
            if (options.maxDuration) url.searchParams.set("max_duration_ms", options.maxDuration.toString());
            if (options.targetDuration) url.searchParams.set("target_duration", options.targetDuration.toString());
            if (options.minEnergy) url.searchParams.set("min_energy", options.minEnergy.toString());
            if (options.maxEnergy) url.searchParams.set("max_enery", options.maxEnergy.toString());
            if (options.targetEnergy) url.searchParams.set("target_energy", options.targetEnergy.toString());
            if (options.minInstrumentalness) url.searchParams.set("min_instrumentalness", options.minInstrumentalness.toString());
            if (options.maxInstrumentalness) url.searchParams.set("max_instrumentalness", options.maxInstrumentalness.toString());
            if (options.targetInstrumentalness) url.searchParams.set("target_instrumentalness", options.targetInstrumentalness.toString());
            if (options.minKey) url.searchParams.set("min_key", options.minKey.toString());
            if (options.maxKey) url.searchParams.set("max_key", options.maxKey.toString());
            if (options.targetKey) url.searchParams.set("target_key", options.targetKey.toString());
            if (options.minLiveness) url.searchParams.set("min_liveness", options.minLiveness.toString());
            if (options.maxLiveness) url.searchParams.set("max_liveness", options.maxLiveness.toString());
            if (options.targetLiveness) url.searchParams.set("target_liveness", options.targetLiveness.toString());
            if (options.minLoudness) url.searchParams.set("min_loudness", options.minLoudness.toString());
            if (options.maxLoudness) url.searchParams.set("max_loudness", options.maxLoudness.toString());
            if (options.targetLoudness) url.searchParams.set("target_loudness", options.targetLoudness.toString());
            if (options.minMode) url.searchParams.set("min_mode", options.minMode.toString());
            if (options.maxMode) url.searchParams.set("max_mode", options.maxMode.toString());
            if (options.targetMode) url.searchParams.set("target_mode", options.targetMode.toString());
            if (options.minPopularity) url.searchParams.set("min_popularity", options.minPopularity.toString());
            if (options.maxPopularity) url.searchParams.set("max_popularity", options.maxPopularity.toString());
            if (options.targetPopularity) url.searchParams.set("target_popularity", options.targetPopularity.toString());
            if (options.minSpeechiness) url.searchParams.set("min_speechiness", options.minSpeechiness.toString());
            if (options.maxSpeechiness) url.searchParams.set("max_speechiness", options.maxSpeechiness.toString());
            if (options.targetSpeechiness) url.searchParams.set("target_speechiness", options.targetSpeechiness.toString());
            if (options.minTempo) url.searchParams.set("min_tempo", options.minTempo.toString());
            if (options.maxTempo) url.searchParams.set("max_tempo", options.maxTempo.toString());
            if (options.targetTempo) url.searchParams.set("target_tempo", options.targetTempo.toString());
            if (options.minTimeSignature) url.searchParams.set("min_time_signature", options.minTimeSignature.toString());
            if (options.maxTimeSignature) url.searchParams.set("max_time_signature", options.maxTimeSignature.toString());
            if (options.targetTimeSignature) url.searchParams.set("target_time_signature", options.targetTimeSignature.toString());
            if (options.minValence) url.searchParams.set("min_valence", options.minValence.toString());
            if (options.maxValence) url.searchParams.set("max_valence", options.maxValence.toString());
            if (options.targetValence) url.searchParams.set("target_valence", options.targetValence.toString());
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        const json: BrowseRecommendationsResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching recommendations: ${json.error.message}`) as undefined;

        return json as BrowseRecommendationsResponse;
    }

    public async recommendationGenres() {
        if (!this.client.token) return logger.error(`No access token available`) as undefined;

        const url = new URL(`${Browser.baseURL}/recommendations/available-genre-seeds`);

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
            },
        });

        const json: BrowseRecommendationGenresResponse & ErrorObject = await res.json();

        if (!res.ok) return logger.error(`Error fetching recommendation genres: ${json.error.message}`) as undefined;

        return (json as BrowseRecommendationGenresResponse).genres;
    }
}
