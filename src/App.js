import React, { Component } from 'react';
import './App.css';
import digimon from './digimon.json';
import DigiCard from './components/DigiCard';
import Title from './components/Title';
import Wrapper from './components/Wrapper';

let clickedArr = [];
let highScore = 0;
let currentScore = 0;

function reset()  {
  clickedArr = [];
  currentScore = 0;
  document.getElementById('currentScore').textContent = currentScore;
}

class App extends Component {

  state = {
    digimon
  };
  
  clickMe = (id) => {
    if(clickedArr.includes(id)){
      reset();
      console.log("HighScore: " + highScore);
      console.log("Current Score: " + currentScore);
    }else{
      clickedArr.push(id);
      
      if( currentScore === highScore ){
        highScore++;
      }
      currentScore++;
      document.getElementById('currentScore').textContent = currentScore;
      document.getElementById('highScore').textContent = highScore;
      
      console.log("HighScore: " + highScore);
      console.log("Current Score: " + currentScore);
    }
    console.log(clickedArr);
  }
  
  render() {
    

    return (
      <Wrapper>
      <Title
        currentScore={currentScore}
        highScore={highScore}
      />
      <div className="container">
        {this.state.digimon.map(renderMon => (
          <DigiCard
            id={renderMon.id}
            key={renderMon.id}
            image={renderMon.image}
            name={renderMon.name}
            clickMon={this.clickMe}
          />
        ))}
      </div>
      </Wrapper>
    );
  }
}

export default App;
