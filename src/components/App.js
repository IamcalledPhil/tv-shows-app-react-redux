import React from "react";
import { connect } from "react-redux";

import Show from "./Show";
import Episode from "./Episode";

const App = (props) => {
    if (props.episode){
        return (<Episode/>)
    } else  {
        return (<Show/>)
    } 
}

function select(state) {
    return {
      episode: state.show.episodes.activeDisplayEpisode
    };
  }
  
  export default connect(select)(App);