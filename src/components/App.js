import React from "react";
import { connect } from "react-redux";

import Show from "./Show";
import Episode from "./Episode";

/**
 * Renders a show or episode page
 */
const App = (props) => {
    if (props.episode){
        return (<Episode/>)
    } else  {
        return (<Show/>)
    } 
}

function select(state) {
    return {
      episode: state.episode.id
    };
  }
  
  export default connect(select)(App);