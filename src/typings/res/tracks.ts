import { AudioFeaturesObject, TrackObject } from "../objects";

export interface TracksMultipleTracksResponse {
    tracks: (TrackObject | null)[];
}

export interface TracksSingleTrackResponse extends TrackObject {}

export interface TracksMultipleTracksAudioFeaturesResponse {
    audio_features: (AudioFeaturesObject | null)[];
}

export interface TracksSingleTrackAudioFeatureResponse extends AudioFeaturesObject {}
