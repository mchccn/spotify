import { PagingObject } from "../meta/context";
import { EpisodeObject, ShowObject } from "../objects";
import { SimplifiedShowObject } from "../simplified";

export interface ShowsMultipleShowsResponse {
    shows: (SimplifiedShowObject | null)[];
}

export interface ShowsSingleShowResponse extends ShowObject {}

export interface ShowsEpisodesResponse extends PagingObject<EpisodeObject> {}
