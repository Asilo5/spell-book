import React, { Component } from 'react';
import './SpellBook.css';
import { connect } from 'react-redux';
import { addFavourite, deleteFavourite } from '../../actions';
import { bindActionCreators } from 'redux';

class SpellBook extends Component {

  toggleFavourtie = (id) => {
   // if id is already in the favourites add into addFavourites
   // else deleteFavourites 
   const { addFavourite, deleteFavourite, favouriteSpells } = this.props;
   
  //  let bob = favouriteSpells.find((spell) => spell.id === id);
  //  console.log(bob);
  //  favouriteSpells.includes(id) ? addFavourite(id) : deleteFavourite(id);

   console.log(favouriteSpells);

  } 

  // <img onClick={this.toggleFavourtie} className={isFavourite ? 'favourite-wand' : 'chosen-wand'} src='https://gamepress.gg/wizardsunite/sites/wizardsunite/files/2019-04/Luna%20Lovegood-foundable_0.png' alt='luna lovegood wand to favourite spell card' />


  render() {
    const {id, spell, type, effect, isFavourite} = this.props;
    return (
        <section className='spells' id={id}>
            <div className='spell-container'>
              <img onClick={this.toggleFavourtie(id)} className='favourite-wand' src='https://gamepress.gg/wizardsunite/sites/wizardsunite/files/2019-04/Luna%20Lovegood-foundable_0.png' alt='luna lovegood wand to favourite spell card' />
              <div className='spell-info'>
                <h3>{spell}</h3>
                <h4>{type}</h4>
                <p>This {type} {effect}</p>
              </div>
            </div>
            <img className='paper-img' src='https://www.artsclip.com/background/XZHaFAgbeP-vintage-paper-scroll-for-short-news-slides.png' alt='background paper for spells' />
        </section>
    )
  }
}

export const mapStateToProps = ({userHouse, nameOfWizard, selectedSpell, spellBook, favouriteSpells }) => ({
  userHouse,
  nameOfWizard,
  selectedSpell,
  spellBook,
  favouriteSpells
})

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ 
    addFavourite: id => dispatch( addFavourite(id) ), 
    deleteFavourite: id => dispatch( deleteFavourite(id) ) 
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SpellBook);
