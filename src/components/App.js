import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    // const response = 로 설정해서 youtube 가 뭘 받는지 console.log(response)를 해주고
    // logging 되는것을 보고 object로 된 data tree 를 잘보고 원하는 데이터의 위치를 잘 설정한다.
    // console.log(response);
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    console.log("From the App!", video);
    //console logging to show logging on console by syaing "From the App!" and show the information of that one specific video
    this.setState({ selectedVideo: video });
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
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
        {/* <VideoDetail video="" /> */}
        {/* onFormSubmit 으로 props를 주고, submit을 하면 SearchBar.js 에서 onFormSubmit funtion이 받아서 this.state.term 과 같게 value 를 맞추어준다*/}
      </div>
    );
  }
}

export default App;
