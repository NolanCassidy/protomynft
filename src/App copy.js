import "./App.css";
import React from "react";
import ReactPlayer from "react-player";
import video1 from "./hevc.mp4";
import video2 from "./Ring.mp4";
import video3 from "./dancer.mp4";

let playing = true;
let muted = false;
let loop = true;
let videoList = [video1, video2];

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  onEnded = () => {
    this.setState(({ index }) => {
      if (index + 1 === videoList.length) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: index + 1 });
      }
    });
  };

  render() {
    return (
      <div>
        {videoList.map((url) => {
          const playing = this.state.index === videoList.indexOf(url);
          let muted = false;

          return (
            <ReactPlayer
              url={url}
              style={{ display: playing ? null : "none", ...this.props.style }}
              playing={playing}
              muted={muted}
              height="100vh"
              onEnded={this.onEnded}
            />
          );
        })}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>This is a playlist looping.</a>
        <Player />
        <a>This is a seemless looping video.</a>
        <ReactPlayer
          height={"100vh"}
          url={videoList}
          playing={playing}
          muted={muted}
          loop={loop}
        />
      </header>
    </div>
  );
}

export default App;
