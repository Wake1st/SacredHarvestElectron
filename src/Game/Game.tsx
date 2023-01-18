import * as React from "react";

import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Music from "@/components/Music";

import "./styles.css";

interface IGameProps {}

const Game: React.FunctionComponent<IGameProps> = (props) => {
  return (
    <>
      <Main />
      <Footer />
      <Music />
    </>
  );
};

export default Game;
