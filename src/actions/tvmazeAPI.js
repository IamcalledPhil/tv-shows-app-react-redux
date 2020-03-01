import { SHOW_LOADED, EPISODE_LIST_LOADED, EPISODE_LOADED } from "../constants/action-types";
import { BASE_TV_MAZE_URL } from "../constants/urls";

export function getShow(showID) {
    return function(dispatch) {
        return fetch(`${BASE_TV_MAZE_URL}/shows/${showID}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: SHOW_LOADED, payload: json });
        });
    };
}

export function getEpisodeList(showID) {
    return function(dispatch) {
        return fetch(`${BASE_TV_MAZE_URL}/shows/${showID}/episodes`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: EPISODE_LIST_LOADED, payload: json });
        });
    };
}

export function getEpisode(episodeID) {
    return function(dispatch) {
        return fetch(`${BASE_TV_MAZE_URL}/episodes/${episodeID}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: EPISODE_LOADED, payload: json });
        });
    };
}

