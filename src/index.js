// Create a new component. This component should produce some HTML.
// Take this component's generated HTML and put it in the DOM.
import React, { Component } from "react";
import ReactDOM from "react-dom";

import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

import _ from "lodash";

const API_KEY = "AIzaSyDAskDDOsEta5AqSQyK7fkAMfxGHEa2rWo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch('heroes of the storm');
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={term => videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    );
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       });
    });
  }
};

ReactDOM.render(
  <App/>,
  document.querySelector(".container")
);
