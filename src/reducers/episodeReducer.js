import { EPISODE_LOADED } from "../constants/action-types";

const initialState = {
    title: "",
    summary: "",
    season: "",
    coverImage: ""
  };
  
  function episodeReducer(state = initialState, action) {
    if (action.type === EPISODE_LOADED) {
      return Object.assign({}, state, {
        title: action.payload.name,
        summary: action.payload.summary,
        season: action.payload.season,
        coverImage: action.payload.image
      });
    }
    return state;
  }


export default episodeReducer;