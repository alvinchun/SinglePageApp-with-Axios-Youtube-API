import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };
  // make sure we can get reference to the video of list
  // making api request = async operation = interact with either promises or async/ await syntax (significant easier to write out what is going on)
  //
  // we take the list of video and let it stay on App component
  //On form Submit, getting the term (input) from the searchbar and sending request (q : term) to get response from youtube by using .get

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* onFormSubmit 으로 props를 주고, submit을 하면 SearchBar.js 에서 onFormSubmit funtion이 받아서 this.state.term 과 같게 value 를 맞추어준다*/}
        I have {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
