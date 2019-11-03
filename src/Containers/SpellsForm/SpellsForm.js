import React, { Component } from 'react';

class SpellsForm extends Component {
  constructor() {
    super();
    this.state = {
      spell: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  render() {
    return (
        <form>
            <input className='search-spells'
                    placeholder='Search for Spell'
                    type='text'
                    name='spell' 
                    value={this.state.spell}
                    onChange={this.handleChange}/>
            <button>Accio!</button>
        </form>
    )
  }
}

export default SpellsForm;