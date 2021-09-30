import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "react-background-video-player";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <VideoPlayer
        className="video"
        src={
          "https://res.cloudinary.com/dv7ollzw5/video/upload/v1619209051/Bloom_Alpha.webm"
        }
        autoPlay={true}
        muted={true}
      />

      

      <div className="mainInput">
      <h1>WELCOME TO OUR WORLD</h1>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Where to go?"
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
