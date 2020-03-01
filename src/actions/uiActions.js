import { DISPLAY_EPISODE, RESET_EPISODE } from "../constants/action-types";

/**
* Action creators for user actions
*/

export function displayEpisode(payload) {
    return { type: DISPLAY_EPISODE, payload }
}

export function resetEpisode() {
    return { type: RESET_EPISODE }
}



