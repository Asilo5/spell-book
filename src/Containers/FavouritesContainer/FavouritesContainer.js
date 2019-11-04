import React from 'react';
import { connect } from 'react-redux';

const FavouritesContainer = ({favouriteSpells}) => {

    return (
      <section>

      </section>
    )
}

export const mapStateToProps = ({favouriteSpells}) => ({
    favouriteSpells
})

export default connect(mapStateToProps)(FavouritesContainer);