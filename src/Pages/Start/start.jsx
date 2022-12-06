import React from "react";
import { Link } from "react-router-dom";
import bg from "./Epic Chases in Video Games.mp4";
import sound from "./sound.mp3";


import "./start.css";

export default function start() {

  var boo = false;
  const mute = () => {
    if (boo) {
      document.getElementById("player").volume = 0.90;
      boo = !boo;
    } else {
      document.getElementById("player").volume = 0;
      boo = !boo;
    }
  };

  return (
    <>
      <video autoPlay loop className="video" muted>
        <source src={bg} type="video/mp4"></source>
      </video>
      <audio id="player" src={sound} autoPlay controls ></audio>

      <div className="start" >
        <div className="fancy">
          <span className="top-key"></span>
          <Link to="/videogames">
            <span className="text">Start</span>
          </Link>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </div>
        <label className="switch" onChange={() => mute()}>
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
}
