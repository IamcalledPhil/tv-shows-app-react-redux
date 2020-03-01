import { EPISODE_LOADED, DISPLAY_EPISODE, RESET_EPISODE } from "../constants/action-types";

const initialState = {
    id: "",
    title: "",
    summary: "",
    season: "",
    coverImage: ""
  };
  
/**
 * Sets the state for episode information and conditional episode display
 *
 * @param {object} state 
 * @param {object} action
 * @return {array} Dispatches an action
 */
  function episodeReducer(state = initialState, action) {
    if (action.type === EPISODE_LOADED) {
      return Object.assign({}, state, {
        title: action.payload.name,
        summary: action.payload.summary,
        season: action.payload.season,
        coverImage: action.payload.image ? 
          action.payload.image.original :
          null
      });
    } else if (action.type === DISPLAY_EPISODE){ 
      return Object.assign({}, state, {
          id: action.payload
      });
    } else if (action.type === RESET_EPISODE){ 
      return Object.assign({}, state, initialState);
    }
    return state;
  }


export default episodeReducer;