import { PagingObject } from "../meta/context";
import { AlbumObject, TrackObject } from "../objects";

export interface AlbumsMultipleAlbumsResponse {
    albums: (AlbumObject | null)[];
}

export interface AlbumsSingleAlbumResponse extends AlbumObject {}

export interface AlbumsTracksResponse extends PagingObject<TrackObject> {}
