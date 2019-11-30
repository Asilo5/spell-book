import React, { Component } from 'react';
import './SpellBook.css'; 
import { connect } from 'react-redux';
import { addFavourite, deleteFavourite } from '../../actions';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

export class SpellBook extends Component {
  constructor() {
    super();
    this.state = {
      chosenFavourite : !false
    }
  }

  toggleFavourite = () => {
   const { addFavourite, deleteFavourite, favouriteSpells, _id, isFavourite} = this.props;
   this.setState({ chosenFavourite : !this.state.chosenFavourite })
   favouriteSpells.includes(_id) ? deleteFavourite(_id) : addFavourite(_id);
  } 

  render() {
    const { chosenFavourite } = this.state;
    const { spell, type, effect } = this.props;
    return (
        <section className='spells' > 
            <div className='spell-container'>
              <img onClick={() => this.toggleFavourite()} className={chosenFavourite ? 'favourite-wand' : 'chosen-wand'} src='https://gamepress.gg/wizardsunite/sites/wizardsunite/files/2019-04/Luna%20Lovegood-foundable_0.png' alt='luna lovegood wand to favourite spell card' />
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
    addFavourite,
    deleteFavourite
  }, dispatch)
)

SpellBook.propTypes = {
  userHouse: PropTypes.string,
  nameOfWizard: PropTypes.string,
  selectedSpell: PropTypes.array,
  spellBook: PropTypes.array,
  favouriteSpells: PropTypes.array,
  addFavourite: PropTypes.func,
  deleteFavourite: PropTypes.func

};

export default connect(mapStateToProps, mapDispatchToProps)(SpellBook);
