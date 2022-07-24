import React, { useEffect } from "react";
import Playbutton from "./Header/PlayButton.component";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import BackupIcon from "@mui/icons-material/Backup";
import MyButton from "./Header/MyButton.component";
import Slider from "./Header/Slider.component";

const Header = (props) => {
  useEffect(() => {
    const context = new AudioContext();
    const playButton = document.querySelector(`#channel0`);

    let yodelBuffer;
    console.log(2);

    window
      .fetch("assets/audio/707-bd.mp3")
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        playButton.disabled = false;
        yodelBuffer = audioBuffer;
      });

    playButton.onclick = () => {
      play(yodelBuffer);
    };

    function play(audioBuffer) {
      const source = context.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(context.destination);
      source.start();
    }
  }, []);
  return (
    <div className="Header">
      <Playbutton />
      <div className="sliderControl" style={{ marginRight: "20vw" }}>
        <Slider label="volume" id="1" />
        <Slider label="BPM" id="2" />
      </div>
      <div style={{ marginRight: "2vw" }}>
        <MyButton startIcon={<SaveIcon />} variant="contained">
          Save
        </MyButton>
        <MyButton startIcon={<AddIcon />} variant="contained">
          New
        </MyButton>
        <MyButton startIcon={<BackupIcon />} variant="contained">
          Upload
        </MyButton>
      </div>
      <button id="test2">channel</button>
    </div>
  );
};
export default Header;
