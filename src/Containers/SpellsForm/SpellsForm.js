import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hasSpells, searchedSpell } from '../../actions';
import './SpellsForm.css';

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
    const { spellBook, searchedSpell } = this.props;

    let chosenOne = spellBook.find((spell) => {
        let lowerCaseSpells = spell.spell.toLowerCase();
        return lowerCaseSpells.includes(chosenSpell.toLowerCase());
      });

     searchedSpell([chosenOne]);

    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({ chosenSpell : '' });
  }

  backToAllSpells = (e) => {
    e.preventDefault();
    const { spellBook, searchedSpell } = this.props;
    searchedSpell(spellBook);
  }

  render() {
      const { selectedSpell } = this.props;
      console.log('length of Spells ', selectedSpell.length);
    return (
        <form className='search-form'>
            {selectedSpell.length === 1 && <button onClick={this.backToAllSpells}>All Spells</button>}
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

export const mapStateToProps = ({spellBook, selectedSpell}) => ({
    spellBook,
    selectedSpell
});

export const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
      hasSpells: spells => dispatch( hasSpells(spells) ),
      searchedSpell: spell => dispatch( searchedSpell(spell) )
    }, dispatch)
 )

export default connect(mapStateToProps, mapDispatchToProps)(SpellsForm);