import React from 'react';
import { connect } from 'react-redux';
import Favourite from '../Favourite/Favourite';

const FavouritesContainer = ({favouriteSpells, spellBook}) => {
   const favSpell = spellBook.map((spell) => {
       favouriteSpells.forEach((id) => {
           if(spell._id === id) {
             return spell;
           }
       })
       return <Favourite {...spell} />
   })

   console.log(favSpell);
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