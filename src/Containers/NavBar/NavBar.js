import React from 'react';
import { connect } from 'react-redux';

const NavBar = ({userHouse, nameOfWizard}) => {
    return (
        <nav>
            <h2>{nameOfWizard}</h2>
            <img src='' alt=''/>
            <h2>Favourite Spells</h2>
        </nav>
    )
}

export const mapStateToProps = ({userHouse, nameOfWizard}) => ({
   userHouse,
   nameOfWizard
})

export default connect(mapStateToProps)(NavBar);