import React from 'react';
import { connect } from 'react-redux';
import SpellBook from '../SpellBook/SpellBook';
import { Link } from 'react-router-dom';

const FavouritesContainer = ({favouriteSpells, spellBook}) => {
   const findSpell = favouriteSpells.map((id) => {
    return spellBook.find((spell) => spell._id === id);
  });

  const favSpell = findSpell.map((spell) => {
    return <SpellBook {...spell} />
  })

    return (
      <section>
          <Link to='/spells'>
            <button>Back</button>
          </Link>
          <h2>Favourites</h2>
          <>
         {favSpell}
          </>
      </section>
    )
}

export const mapStateToProps = ({favouriteSpells, spellBook}) => ({
    favouriteSpells,
    spellBook
})

export default connect(mapStateToProps)(FavouritesContainer);