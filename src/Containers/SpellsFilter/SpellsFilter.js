import React, { Component } from 'react';
import './SpellsFilter.css';
import { bindActionCreators } from 'redux';
import {  searchedSpell } from '../../actions';
import { connect } from 'react-redux';

class SpellsFilter extends Component {

    filterSpells = (type) => {
        const { spellBook, searchedSpell } = this.props;
      let clickedType = spellBook.filter((spell) => spell.type === type);
      searchedSpell(clickedType);
    }

    render() {
        return (
            <section>
                <button onClick={() => this.filterSpells('Charm')}>Charm</button>
                <button onClick={() => this.filterSpells('Enchantment')}>Enchantment</button>
                <button onClick={() => this.filterSpells('Hex')}>Hex</button>
                <button onClick={() => this.filterSpells('Spell')}>Spell</button>
                <button onClick={() => this.filterSpells('Curse')}>Curse</button>
                <button onClick={() => this.filterSpells('Jinx')}>Jinx</button>
            </section>
        )
    }
}

export const mapStateToProps = ({spellBook}) => ({
    spellBook
});

export const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
      searchedSpell: spell => dispatch( searchedSpell(spell) )
    }, dispatch)
 )

export default connect(mapStateToProps, mapDispatchToProps)(SpellsFilter);