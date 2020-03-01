import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Main store, using thunk as an async middleware as it's a relitively simple app. 
 */
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(thunk))
);

export default store;