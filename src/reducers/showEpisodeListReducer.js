import { EPISODE_LIST_LOADED } from "../constants/action-types";

  const initialState = {
    episodeList: []
  };
  
/**
 * Sets the state for the list of episodes
 *
 * @param {object} state 
 * @param {object} action
 * @return {array} Dispatches an action
 */
  function showEpisodeListReducer(state = initialState, action) {
    if (action.type === EPISODE_LIST_LOADED) {
      return Object.assign({}, state, {
        episodeList: state.episodeList.concat(action.payload)

      });
    } 
    return state;
  }


export default showEpisodeListReducer;