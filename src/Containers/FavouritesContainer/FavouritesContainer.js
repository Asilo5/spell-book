import React from 'react';
import { connect } from 'react-redux'; 
import SpellBook from '../SpellBook/SpellBook';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './FavouritesContainer.css'; 

export const FavouritesContainer = ({favouriteSpells, spellBook}) => {
   const findSpell = favouriteSpells.map((id) => {
    return spellBook.find((spell) => spell._id === id);
  });

  const favSpell = findSpell.map((spell) => {
    return <SpellBook {...spell} />
  })

    return (
      <section className='favourites-container'>
          <Link to='/spells'>
            <button className='back-btn-fav' >Back</button>
          </Link>
          <h2 className='favourites'>Favourite Spells</h2>
          <div className='fav-spells'>
            {favSpell}
          </div>
      </section>
    )
}

export const mapStateToProps = ({favouriteSpells, spellBook}) => ({
    favouriteSpells,
    spellBook
})

FavouritesContainer.propTypes = {
  favouriteSpells: PropTypes.array, 
  spellBook: PropTypes.func
}; 

export default connect(mapStateToProps)(FavouritesContainer);