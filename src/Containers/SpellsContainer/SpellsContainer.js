import React from 'react';
import  NavBar from '../NavBar/NavBar';
import SpellBook from '../SpellBook/SpellBook';
import SpellsForm from '../SpellsForm/SpellsForm';
import './SpellsContainer.css';
import { connect } from 'react-redux';

const SpellsContainer = ({spellBook}) => { 
  const completeSpells = spellBook.map((spell) => {
      return <SpellBook key={spell.id} {...spell}/>
  })
    return (
        <section className='spells-container'>
           <NavBar />
           <SpellsForm />
           {completeSpells} 
        </section> 
    )
}

export const mapStateToProps = ({ spellBook }) => ({
    spellBook 
})

export default connect(mapStateToProps)(SpellsContainer);