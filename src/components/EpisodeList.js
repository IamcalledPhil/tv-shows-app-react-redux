import React, { Component } from "react";
import { connect } from "react-redux";
import { getEpisodeList } from "../actions/tvmazeAPI";
import { displayEpisode } from "../actions/uiActions";

export class EpisodeList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

  componentDidMount() {
    this.props.getEpisodeList(this.props.showID);
  }

  handleClick (event) {
    this.props.displayEpisode(event.target.value);
  }

  render() {
    return (
        <ul className="episode-list-container">
             {this.props.episodeList.map(episode => (
                <li key={episode.id} 
                onClick={this.handleClick}
                value={episode.id}>{episode.name}</li>
        ))}
        </ul>
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
