import React, { Component } from 'react';
import HouseForm  from '../../Containers/HouseForm/HouseForm';
import  SpellsContainer  from '../../Containers/SpellsContainer/SpellsContainer';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <section>
        <Route exact path='/' render={() => <HouseForm /> } />
        <Route exact path='/spells' render={() => <SpellsContainer /> } />
      </section>
    );
  }
}

export default App;
