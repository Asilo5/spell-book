import React from 'react';
import { connect } from 'react-redux';
import Favourite from '../Favourite/Favourite';

const FavouritesContainer = ({favouriteSpells, spellBook}) => {
   const favSpell = favouriteSpells.map((id) => {
      if(spellBook._id.includes(id)) {
          console.log(spellBook);
        //   return <Favourite key={id} />
      }
   })
    return (
      <section>
         {/* {favSpell} */}
      </section>
    )
}

export const mapStateToProps = ({favouriteSpells, spellBook}) => ({
    favouriteSpells,
    spellBook
})

export default connect(mapStateToProps)(FavouritesContainer);