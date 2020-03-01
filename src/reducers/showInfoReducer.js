import { SHOW_LOADED } from "../constants/action-types";

const initialState = {
    title: "",
    description: "",
    coverImage: "",
    id: ""
  };
  
  function showInfoReducer(state = initialState, action) {
    if (action.type === SHOW_LOADED) {
      return Object.assign({}, state, {
        title: action.payload.name,
        description: action.payload.summary,
        coverImage: action.payload.image ? 
          action.payload.image.original :
          null,
        id: action.payload.id
      });
    }
    return state;
  }


export default showInfoReducer;