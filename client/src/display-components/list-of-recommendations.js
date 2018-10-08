import React from "react";
import { getKeyName } from "../camelot-wheel/camelot-wheel";

export default function ListsOfRecommendations({ recommendedTracksByKey }) {
  return (
    Object.keys(recommendedTracksByKey).length > 0 &&
    Object.values(recommendedTracksByKey).map((tracks, index) => {
      return (
        <div>
          <h3>{getKeyName(tracks[0].key, tracks[0].mode)}</h3>
          {tracks.map(track => {
            return (
              <p>
                {track.name} by {track.artists[0].name} /// key ={" "}
                {getKeyName(track.key, track.mode)}
              </p>
            );
          })}
        </div>
      );
    })
  );
}
