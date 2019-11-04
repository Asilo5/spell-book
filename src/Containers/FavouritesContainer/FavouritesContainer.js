import React from 'react';
import { connect } from 'react-redux';
import SpellBook from '../SpellBook/SpellBook';

const FavouritesContainer = ({favouriteSpells, spellBook}) => {
   const findSpell = favouriteSpells.map((id) => {
    return spellBook.find((spell) => spell._id === id);
  });

  const favSpell = findSpell.map((spell) => {
    return <SpellBook {...spell} />
  })

    return (
      <section>
         {favSpell}
      </section>
    )
}

export const mapStateToProps = ({favouriteSpells, spellBook}) => ({
    favouriteSpells,
    spellBook
})

export default connect(mapStateToProps)(FavouritesContainer);