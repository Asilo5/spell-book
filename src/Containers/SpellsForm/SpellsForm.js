import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    const { spellBook } = this.props;

    let chosenOne = spellBook.filter((spell) => {
        let lowerCaseSpells = spell.spell.toLowerCase();
        return lowerCaseSpells.includes(chosenSpell.toLowerCase());
      });

    console.log(chosenOne)

    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({ chosenSpell : '' });
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
            <button className='accio-btn' onClick={this.findSpell}>Accio!</button>
        </form>
    )
  }
}

export const mapStateToProps = ({spellBook}) => ({
    spellBook
})

export default connect(mapStateToProps)(SpellsForm);