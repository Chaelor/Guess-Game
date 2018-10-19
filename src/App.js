import React, { Component } from 'react';
import './App.css';
import digimon from './digimon.json';
import DigiCard from './components/DigiCard';
import Title from './components/Title';
import Wrapper from './components/Wrapper';

let clickedArr = [];


class App extends Component {

  state = {
    digimon: digimon,
    message: "Click on a Digimon to begin! Don't click the same one twice, that's how you lose!",
    highScore: 0,
    currentScore: 0,
    clickedArr: [],
    classNames: "title--text"
  };


  //This is what shuffles the array. It is called
  //At the start of the handleClick function. It will
  //Rescramble all the pictures in the array.
  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  //Handles the click. Takes in the ID of the corresponding click
  //Saves it to the clicked array if it isn't clicked
  handleClick = (id) => {

    this.shuffle(digimon);

    //This is called if the user clicks the same picture twice
    //This is the reset
    if (clickedArr.includes(id)) {

      //Reset the state, tell the user they messed up.
      this.setState({
        message: "You guessed incorrectly, try again!",
        currentScore: 0,
        classNames: "title--text red"
      });

      //Reset and clear the array.
      clickedArr = [];

    } else {

      //Push the ID to an array.
      //This ID will be used to see if the user already click on this id.
      clickedArr.push(id);

      //Add 1 to the state, tell the user they guessed correctly
      this.setState({
        digimon: digimon,
        message: "You guessed correctly, keep going!",
        currentScore: this.state.currentScore + 1,
        classNames: "title--text green"
      })

      //Increment the highscore based on the current score.
      if (this.state.currentScore >= this.state.highScore) {
        this.setState({
          highScore: this.state.highScore + 1
        })
      }

      if (this.state.currentScore === 7) {
        this.setState({
          message: "Congratulations! You've won the game, click another Digimon to try again!",
          currentScore: 0,
          classNames: "title--text victory"
        })

        clickedArr = [];

      }
    }
  }

  render() {

    return (
      <Wrapper>
        <Title
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
          classNames={this.state.classNames}
        />
        <div className="container">
          {this.state.digimon.map(digimon => (
            <DigiCard
              id={digimon.id}
              key={digimon.id}
              image={digimon.image}
              name={digimon.name}
              clickMon={this.handleClick}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
