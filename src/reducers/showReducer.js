import showInfoReducer from './showInfoReducer';
import showEpisodeListReducer from './showEpisodeListReducer'

const showReducer = combineReducer({  
    info: showInfoReducer,  
    episodes: showEpisodeListReducer
});

export default showReducer;