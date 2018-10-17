import React, { Component } from 'react';
import './App.css';
import digimon from './digimon.json';
import DigiCard from './components/DigiCard';
import Title from './components/Title';
import Wrapper from './components/Wrapper';

let clickedArr = [];
let highScore = 0;
let currentScore = 0;

function reset() {
  clickedArr = [];
  currentScore = 0;
  document.getElementById('currentScore').textContent = currentScore;
}


class App extends Component {

  state = {
    digimon: digimon
  };

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  clickMe = (id) => {
    this.shuffle(digimon);

    if (clickedArr.includes(id)) {
      reset();
    } else {
      clickedArr.push(id);


      this.setState({
        digimon: digimon
      })
      if (currentScore === highScore) {
        highScore++;
      }
      currentScore++;
      document.getElementById('currentScore').textContent = currentScore;
      document.getElementById('highScore').textContent = highScore;
    }
  }

  render() {

    return (
      <Wrapper>
        <Title
          currentScore={currentScore}
          highScore={highScore}
        />
        <div className="container">
          {this.state.digimon.map(digimon => (
            <DigiCard
              id={digimon.id}
              key={digimon.id}
              image={digimon.image}
              name={digimon.name}
              clickMon={this.clickMe}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
