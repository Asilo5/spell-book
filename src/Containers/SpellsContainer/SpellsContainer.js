import React from 'react';
import  NavBar from '../NavBar/NavBar';
import SpellBook from '../SpellBook/SpellBook';
import SpellsForm from '../SpellsForm/SpellsForm';
import './SpellsContainer.css';
import { connect } from 'react-redux';

export const SpellsContainer = ({selectedSpell}) => { 
  const completeSpells = selectedSpell.map((spell) => {
      return <SpellBook key={spell.id} {...spell}/>
  })
    return ( 
        <section className='spells-container'>
           <NavBar />
           <SpellsForm />
           <div className='completed-spells'>
             {completeSpells} 
           </div>
        </section> 
    )
}

export const mapStateToProps = ({ selectedSpell }) => ({
    selectedSpell
})

export default connect(mapStateToProps)(SpellsContainer);