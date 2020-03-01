import { EPISODE_LIST_LOADED, DISPLAY_EPISODE } from "../constants/action-types";

const initialState = {
    episodeList: [],
    activeDisplayEpisode: null
  };
  
  function showEpisodeListReducer(state = initialState, action) {
    if (action.type === EPISODE_LIST_LOADED) {
      return Object.assign({}, state, {
        episodeList: state.episodeList.concat(action.payload)

      });
    } else if (action.type == DISPLAY_EPISODE){
        return Object.assign({}, state, {
            activeDisplayEpisode: action.payload
        });
    }
    return state;
  }


export default showEpisodeListReducer;