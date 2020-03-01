import React, { Component } from "react";
import { connect } from "react-redux";
import { getShow } from "../actions/tvmazeAPI";
import EpisodeList from "./EpisodeList";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export class Show extends Component {

  componentDidMount() {
    // powerpuff girls for now
    this.props.getShow("6771");
  }

  showEpisodeList = () => {
      if (this.props.title){
        return (<EpisodeList/>)
      } 
  }

  render() {
    return (
        <div className="show-container">
            <h1>
                {this.props.title}
            </h1>
            <p>{ReactHtmlParser(this.props.description)}</p>
            <img src={this.props.coverImage} alt="No image available"/>
            {this.showEpisodeList()}
        </div>
    );
  }
}

function select(state) {
  return {
    title: state.show.info.title,
    description: state.show.info.description,
    coverImage: state.show.info.coverImage
  };
}

export default connect(
  select,
  { getShow }
)(Show);
