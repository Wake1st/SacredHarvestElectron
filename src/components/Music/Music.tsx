import * as React from "react";
import music from "@/assets/audio/ForbiddenNorth.mp3";

interface IMusicProps {}

const Music: React.FunctionComponent<IMusicProps> = (props) => {
  return (
    <audio id="bgMusic" autoPlay loop>
      <source src={music} type="audio/mp3" />
    </audio>
  );
};

export default Music;
