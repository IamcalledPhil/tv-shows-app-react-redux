import showReducer from './showReducer';
import episodeReducer from './episodeReducer';

const rootReducer = combineReducer({  
    show: showReducer,  
    episode: episodeReducer
});

export default rootReducer;