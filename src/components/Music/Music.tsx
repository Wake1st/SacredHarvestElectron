import * as React from 'react';
import music from '@/assets/audio/ForbiddenNorth.mp3';
import subtitles from '@/assets/audio/ForbiddenNorth.vtt';

const Music = () => (
  <audio id="bgMusic" autoPlay loop>
    <track kind="captions" srcLang="en" src={subtitles} />
    <source src={music} type="audio/mp3" />
  </audio>
);

export default Music;
