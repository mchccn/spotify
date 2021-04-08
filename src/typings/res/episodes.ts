import { EpisodeObject } from "../objects";

export interface EpisodesMultipleEpisodesResponse {
    episodes: (EpisodeObject | null)[];
}

export interface EpisodesSingleEpisodeResponse extends EpisodeObject {}
