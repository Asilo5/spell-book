import React, { Component } from 'react';
import './HouseForm.css';
import { getHouses } from '../../apiCalls';
import { connect } from 'react-redux';
import { givenHouse } from '../../actions';
import { Link } from 'react-router-dom';

export class HouseForm extends Component {
    constructor() {
      super();
      this.state = {
        wizardName : '',
        hasError: ''
      }
    }

    handleChange = (e) => {
      this.setState({ [e.target.name] : e.target.value })
    }

    foundHouse = async (e) => {
        e.preventDefault();
        const { givenHouse, nameOfWizard } = this.props;
        const { wizardName } = this.state;
      try {
        const resp = await getHouses();
        givenHouse(resp);
        nameOfWizard(wizardName);
    } catch (error) {
        this.setState({ hasError : error })
    }
}

render() {
    const { userHouse } = this.props;
    console.log(userHouse)
      return (
          <section className='form-section'>
              <form className='house-form'>
                  <div className='banner'>
                    <input className='wizard-name'
                         type='text'
                         placeholder='Name Here' 
                         name='wizardName' 
                         value={this.state.wizardName} 
                         onChange={this.handleChange} />
                    <img className='name-banner' src='https://www.pinclipart.com/picdir/big/10-101144_vintage-banner-vector-png-theveliger-clipart-vintage-banner.png' alt='banner name' />
                  </div>
                  <Link to='/spells'>
                    <div onClick={(e) => this.foundHouse(e)}>
                      <img className='sorting-button' src='https://cdn.shopify.com/s/files/1/0221/1146/products/Sorting_Hat_pin_badge_scaled_grande.png?v=1551715337' alt='sorting hat' />
                      <h2 className='submit-text'>Enter</h2>
                    </div>
                  </Link>
              </form>
          </section>
      )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    givenHouse: (house) => dispatch( givenHouse(house) ),
    isLoading: (bool) => dispatch( dispatch(bool) ),
    nameOfWizard: (name) => dispatch( dispatch(name) )
})

export default connect(null, mapDispatchToProps)(HouseForm);