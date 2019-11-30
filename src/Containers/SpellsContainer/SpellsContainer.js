import React from 'react';
import  NavBar from '../NavBar/NavBar';
import SpellBook from '../SpellBook/SpellBook';
import SpellsForm from '../SpellsForm/SpellsForm';
import SpellsFilter from '../SpellsFilter/SpellsFilter';

import { bindActionCreators } from 'redux';
import { searchedSpell } from '../../actions';
import './SpellsContainer.css';
import { connect } from 'react-redux';


export const SpellsContainer  = ({ selectedSpell }) => {

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

export const mapStateToProps = ({ selectedSpell, spellBook }) => ({
    selectedSpell,
    spellBook
})

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    searchedSpell: spell => dispatch( searchedSpell(spell) )
  }, dispatch)
)

export default connect(mapStateToProps)(SpellsContainer);