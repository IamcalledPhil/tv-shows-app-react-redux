import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';

import { connect } from "react-redux";
import { getEpisode } from "../actions/tvmazeAPI";
import { resetEpisode } from "../actions/uiActions";
import "../styles/Episode.scss"

export class Episode extends Component {

    constructor(props) {
        super(props);
        this.resetEpisode = this.resetEpisode.bind(this);
    }

  componentDidMount() {
    this.props.getEpisode(this.props.episodeID);
  }

  /**
   * Stop displaying the episode
   */
  resetEpisode () {
    this.props.resetEpisode();
  }

  render() {
    return (
        <div className="episode-container">
            <div className="episode-header">
                <h1>
                    {this.props.title}
                </h1>
                <h2>Season {this.props.season}</h2>
            </div>
            <div className="episode-content-container">
                <span className="episode-summary">{ReactHtmlParser(this.props.summary)}</span>
                <img className="episode-image" src={this.props.coverImage} alt=""/>
                <button onClick={this.resetEpisode} className="back-button">Back</button>
            </div>
        </div>
    );
  }
}

function select(state) {
  return {
    episodeID: state.episode.id,
    title: state.episode.title,
    summary: state.episode.summary,
    season: state.episode.season,
    coverImage: state.episode.coverImage
  };
}

export default connect(
  select,
  { getEpisode, resetEpisode }
)(Episode);
