import React, { Component } from 'react';
import './SpellsFilter.css';
import { bindActionCreators } from 'redux';
import {  searchedSpell } from '../../actions';
import { connect } from 'react-redux';
import { mapStateToProps } from '../SpellsForm/SpellsForm';

class SpellsFilter extends Component {

    filterSpells = (type) => {
      const { spellBook, searchedSpell } = this.props;
      let clickedType = spellBook.filter((spell) => spell.type === type);
      searchedSpell([clickedType]);
    }

    render() {
        return (
            <section>
                <button>Charm</button>
                <button>Enchantment</button>
                <button>Hex</button>
                <button>Spell</button>
                <button>Curse</button>
            </section>
        )
    }
}

mapStateToProps = ({ spellBook }) => ({
   spellBook
})

export const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
      searchedSpell: spell => dispatch( searchedSpell(spell) )
    }, dispatch)
 )

export default connect(mapStateToProps, mapDispatchToProps)(SpellsFilter);