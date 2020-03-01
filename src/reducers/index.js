import showReducer from './showReducer';
import episodeReducer from './episodeReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({  
    show: showReducer,  
    episode: episodeReducer
});

export default rootReducer;