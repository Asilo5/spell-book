import React, { Component } from 'react';

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

    render() {
      return (
          <section>
              <form>
                  <input className='wizard-name'
                         type='text'
                         placeholder='Name Here' 
                         name='wizardName' 
                         value={this.state.wizardName} 
                         onChange={this.handleChange} />
                  <img src='' alt='' />
              </form>
          </section>
      )
    }
}

// export default HouseForm;