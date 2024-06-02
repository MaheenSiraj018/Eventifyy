import React from 'react';
import './MainPage.css';
import backgroundvid from '../../assets/bg.mp4';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className='main'>
      <video autoPlay loop muted className='background-video'>
        <source src={backgroundvid} type='video/mp4' />
      </video>
      <div className='content'>
        <h1 className='main-header'>Get Started with Eventify!</h1>
        <p className='main-content'>
          Eventify is the quickest and easiest way to plan your events, providing personalized assistance and recommendations powered by advanced AI.
        </p>
        <Link to='/chat' className='started'>Get Started!</Link>
      </div>
    </div>
  );
}

export default MainPage;