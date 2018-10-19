import React from 'react';
import './Title.css';

const Title = props => (
  <div className="title"> 
    <h1 className="title--text">Digi-Know?</h1>
    <h2 className="title--text">Current score: <span id="currentScore">{props.currentScore}</span></h2>
    <h2 className="title--text">Highscore:  <span id="highScore">{props.highScore}</span></h2>
    <h3 className={props.classNames}><span id="message">{props.message}</span></h3>
  </div>
);

export default Title; 