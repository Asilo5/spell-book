import React, { Component } from 'react';

class SpellsForm extends Component {
  constructor() {
    super();
    this.state = {
      chosenSpell: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  findSpell = (e) => {
    e.preventDefault();
    const { chosenSpell } = this.state;

    let chosenOne = spells.filter((spell) => {
        let lowerCaseSpells = spell.spell.toLowerCase();
        return lowerCaseSpells.includes(chosenSpell.toLowerCase());
      });

    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({ spell : '' });
  }

  render() {
    return (
        <form>
            <input className='search-spells'
                    placeholder='Search for Spell'
                    type='text'
                    name='chosenSpell' 
                    value={this.state.chosenSpell}
                    onChange={this.handleChange}/>
            <button>Accio!</button>
        </form>
    )
  }
}

export default SpellsForm;