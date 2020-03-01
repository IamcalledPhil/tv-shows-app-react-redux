import React, { Component } from "react";
import { connect } from "react-redux";
import { getEpisode } from "../actions/tvmazeAPI";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export class Episode extends Component {

  componentDidMount() {
    this.props.getEpisode(this.props.episodeID);
  }

  render() {
    return (
        <div className="episode-container">
            <h1>
                {this.props.title}
            </h1>
            <h2>Season {this.props.season}</h2>
            <p>{ReactHtmlParser(this.props.summary)}</p>
            <img src={this.props.coverImage} alt="No imamge available"/>
        </div>
    );
  }
}

function select(state) {
  console.log(state.show.episodes.activeDisplayEpisode);
  return {
    episodeID: state.show.episodes.activeDisplayEpisode,
    title: state.episode.title,
    summary: state.episode.summary,
    season: state.episode.season,
    coverImage: state.episode.coverImage
  };
}

export default connect(
  select,
  { getEpisode }
)(Episode);
