import React, { Component } from "react";
import { connect } from "react-redux";
import { getEpisodeList } from "../actions/tvmazeAPI";
import { displayEpisode } from "../actions/uiActions";
import "../styles/Show.scss";
export class EpisodeList extends Component {
    constructor(props) {
        super(props);
        this.showEpisode = this.showEpisode.bind(this);
    }

  componentDidMount() {
    // only need to fetch episodes if we don't have them already
    if (this.props.episodeList.length === 0){
        this.props.getEpisodeList(this.props.showID);
    }
  }

  showEpisode (event) {
    this.props.displayEpisode(event.target.value);
  }

  render() {
    return (
        <div className="episode-list-container">
            <h2>Episodes</h2>
            <ul>
             {this.props.episodeList.map(episode => (
                <li key={episode.id} 
                onClick={this.showEpisode}
                value={episode.id}>{episode.name}</li>
                ))}
            </ul>
        </div>
       
    );
  }
}

function select(state) {
  return {
      showID: state.show.info.id,
      episodeList: state.show.episodes.episodeList
  };
}

export default connect(
  select,
  { getEpisodeList, displayEpisode }
)(EpisodeList);
