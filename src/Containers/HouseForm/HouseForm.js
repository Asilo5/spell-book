import React, { Component } from 'react';
import './HouseForm.css';
import { getHouses } from '../../apiCalls';

export class HouseForm extends Component {
    constructor() {
      super();
      this.state = {
        wizardName : ''
      }
    }

    handleChange = (e) => {
      this.setState({ [e.target.name] : e.target.value })
    }

    foundHouse = async (e) => {
        e.preventDefault();
      try {
        const resp = await getHouses();
        console.log(resp);
      } catch (error) {
          console.log(error)
      }
    }

    render() {
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
                    <img className='name-banner' src='https://www.pinclipart.com/picdir/big/10-101144_vintage-banner-vector-png-theveliger-clipart-vintage-banner.png' alt='banner name image' />
                  </div>
                  <div onClick={(e) => this.foundHouse(e)}>
                    <img className='sorting-button' src='https://cdn.shopify.com/s/files/1/0221/1146/products/Sorting_Hat_pin_badge_scaled_grande.png?v=1551715337' alt='sorting hat image' />
                    <h2 className='submit-text'>Enter</h2>
                  </div>
              </form>
          </section>
      )
    }
}

// export default HouseForm;