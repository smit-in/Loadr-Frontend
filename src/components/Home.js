import React from 'react';
import Gif from '../assets/img/hero.gif';
import UploadArea from './UploadArea';

const Home = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1 className="hero__title">
          Streamlining File Sharing
        </h1>
        <h1 className="hero__subtitle">
          Get Shareable Link & <br /> Automate Link Sharing via EMail.
        </h1>
        <UploadArea />
      </div>
      <div className="hero__right">
        <img src={Gif} alt="Animation Gif" className="hero__gif" />
      </div>
    </div>
  );
};

export default Home;
