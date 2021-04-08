import { PagingObject } from "../meta/context";
import { AlbumObject, ArtistObject, EpisodeObject, PlaylistObject, ShowObject, TrackObject } from "../objects";

export interface SearchResponse {
    artists?: PagingObject<ArtistObject>;
    playlists?: PagingObject<PlaylistObject>;
    albums?: PagingObject<AlbumObject>;
    tracks?: PagingObject<TrackObject>;
    shows?: PagingObject<ShowObject>;
    episodes?: PagingObject<EpisodeObject>;
}
