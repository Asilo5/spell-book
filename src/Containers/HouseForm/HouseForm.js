import React, { Component } from 'react';
import './HouseForm.css';
import { getHouses, getSpells } from '../../apiCalls';
import { connect } from 'react-redux';
import { givenHouse, isLoading, wizardsName, hasSpells, searchedSpell } from '../../actions';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import LoadingPage from '../LoadingPage/LoadingPage';

export class HouseForm extends Component {
    constructor() {
      super();
      this.state = {
        name : '',
        hasError: ''
      }
    }

    handleChange = (e) => {
      this.setState({ [e.target.name] : e.target.value })
    }

    foundHouse = async () => {
        const { givenHouse, wizardsName, isLoading } = this.props;
        const { name } = this.state;
      try {
        const resp = await getHouses();
        // { isLoading && <LoadingPage /> }
        givenHouse(resp);
        wizardsName(name);
        isLoading(false);
        this.foundSpells();
    } catch (error) {
        this.setState({ hasError : error });
    }
  }

   foundSpells = async () => {
     const { hasSpells, searchedSpell } = this.props;
     try {
       const resp = await getSpells();
       let updateResp = resp.map((spell) => {
         spell.isFavourite = false;
         return spell;
       });
       hasSpells(updateResp);
       searchedSpell(updateResp);
     } catch (error) {
      this.setState({ hasError : error });
     }
   }

render() {
  const { name } = this.state;
  const isEnabled = name.length > 0;
      return (
          <section className='form-section'>
              <form className='house-form'>
                  <div className='banner'>
                    <input className='wizard-name'
                         type='text'
                         placeholder='Name Here' 
                         name='name' 
                         value={this.state.name} 
                         onChange={this.handleChange} />
                    <img className='name-banner' src='https://www.pinclipart.com/picdir/big/10-101144_vintage-banner-vector-png-theveliger-clipart-vintage-banner.png' alt='banner name' />
                  </div>
                  <Link to='/spells' onClick={this.foundHouse} disabled={!isEnabled} > 
                    <div className='sorting-container'>
                      <img className='sorting-button' src='https://cdn.shopify.com/s/files/1/0221/1146/products/Sorting_Hat_pin_badge_scaled_grande.png?v=1551715337' alt='sorting hat' />
                      <h3 className='submit-text'>Enter</h3>
                    </div>
                  </Link>
              </form>
          </section>
      )
    }
}

export const mapDispatchToProps = (dispatch) => (
   bindActionCreators({
     givenHouse: house => dispatch( givenHouse(house) ),
     isLoading: bool => dispatch( isLoading(bool) ),
     wizardsName: name => dispatch( wizardsName(name) ),
     hasSpells: spells => dispatch( hasSpells(spells) ),
     searchedSpell: spell => dispatch( searchedSpell(spell) )
   }, dispatch)
)


export default connect(null, mapDispatchToProps)(HouseForm);