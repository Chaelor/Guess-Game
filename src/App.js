import React, { Component } from 'react';
import './App.css';
import digimon from './digimon.json';
import DigiCard from './components/DigiCard';
import Title from './components/Title';
import Wrapper from './components/Wrapper';


class App extends Component {

  state = {
    digimon
  };

  render() {

    return (
      <Wrapper>
      <Title>Digi Match!</Title>
        {this.state.digimon.map(renderMon => (
          <DigiCard
            id={renderMon.id}
            key={renderMon.id}
            image={renderMon.image}
            name={renderMon.name}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
