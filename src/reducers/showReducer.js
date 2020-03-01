import showInfoReducer from './showInfoReducer';
import showEpisodeListReducer from './showEpisodeListReducer';
import { combineReducers } from 'redux';

const showReducer = combineReducers({  
    info: showInfoReducer,  
    episodes: showEpisodeListReducer
});

export default showReducer;