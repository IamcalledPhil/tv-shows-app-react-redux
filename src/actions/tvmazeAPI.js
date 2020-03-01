import { SHOW_LOADED, EPISODE_LIST_LOADED, EPISODE_LOADED } from "../constants/action-types";
import { BASE_TV_MAZE_URL } from "../constants/urls";

/**
 * Retrieves a function which returns a show object from the API
 *
 * @param {string} showID 
 * @return {object} Dispatches an action
 */
export function getShow(showID) {
    return function(dispatch) {
        return fetch(`${BASE_TV_MAZE_URL}/shows/${showID}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: SHOW_LOADED, payload: json });
        });
    };
}

/**
 * Returns a function which retrieves a list of episodes array from the API
 *
 * @param {string} showID 
 * @return {array} Dispatches an action
 */
export function getEpisodeList(showID) {
    return function(dispatch) {
        return fetch(`${BASE_TV_MAZE_URL}/shows/${showID}/episodes`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: EPISODE_LIST_LOADED, payload: json });
        });
    };
}

/**
 * Returns a function which retrieves an episode object from the API
 *
 * @param {string} episodeID 
 * @return {object} Dispatches an action
 */
export function getEpisode(episodeID) {
    return function(dispatch) {
        return fetch(`${BASE_TV_MAZE_URL}/episodes/${episodeID}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: EPISODE_LOADED, payload: json });
        });
    };
}

