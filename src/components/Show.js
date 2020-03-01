import React, { Component } from "react";
import { connect } from "react-redux";
import { getShow } from "../actions/tvmazeAPI";
import EpisodeList from "./EpisodeList";
import ReactHtmlParser from 'react-html-parser';
import "../styles/Show.scss";

export class Show extends Component {

  componentDidMount() {
    this.props.getShow(this.props.id);
  }

  showEpisodeList = () => {
      // only show the list of episodes if we have episode information to show!
      if (this.props.id){
        return (<EpisodeList/>)
      } 
  }

  render() {
    return (
        <div className="show-container">
            <div className="show-header">
                <h1>{this.props.title}</h1>
            </div>
           
            <div className="show-content-container">
                <img src={this.props.coverImage} alt="" className="show-image"/>     
                <div className="show-description">{ReactHtmlParser(this.props.description)}</div>
                {this.showEpisodeList()}
            </div>
        </div>
    );
  }
}

function select(state) {
  return {
    id: state.show.info.id,
    title: state.show.info.title,
    description: state.show.info.description,
    coverImage: state.show.info.coverImage
  };
}

export default connect(
  select,
  { getShow }
)(Show);
