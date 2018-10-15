import React from 'react';
import './DigiCard.css';

const DigiCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={ () => props.clickMon(props.id) }/>
    </div>
  </div>
);

export default DigiCard;