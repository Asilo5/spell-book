import React, { Component } from 'react';
import  NavBar from '../NavBar/NavBar';
import SpellBook from '../SpellBook/SpellBook';
import SpellsForm from '../SpellsForm/SpellsForm';
import SpellsFilter from '../SpellsFilter/SpellsFilter';
import './SpellsContainer.css';
import { connect } from 'react-redux';


export class SpellsContainer extends Component {
  
  filterSpells = (spell) => {

    const { searchedSpell, spellBook } = this.props;
     
    let chosenOne = spellBook.find((spell) => {
      let lowerCaseSpells = spell.spell.toLowerCase();
      return lowerCaseSpells.includes(spell.toLowerCase());
    });

   searchedSpell([chosenOne]);

  }

  render () {
    const { selectedSpell } = this.props;
    const completeSpells = selectedSpell.map((spell) => {
            return <SpellBook key={spell.id} {...spell}/>
        })
    return (
      <section className='spells-container'>
           <NavBar />
            <SpellsForm />
            <SpellsFilter />
            <div className='completed-spells'>
              {completeSpells} 
            </div>
        </section> 
    )
  }
}

export const mapStateToProps = ({ selectedSpell, spellBook }) => ({
    selectedSpell,
    spellBook
})

export default connect(mapStateToProps)(SpellsContainer);