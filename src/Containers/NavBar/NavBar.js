import React from 'react';
import { connect } from 'react-redux';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom'; 
import { PropTypes } from 'prop-types';

export const NavBar = ({userHouse, nameOfWizard}) => {
    return ( 
        <nav>
            <h2>{nameOfWizard} Potter </h2>
            <Link to='/'>
              {userHouse === 'Gryffindor' && <img className='mascot-img' src='https://animeandthings.com/wp-content/uploads/2018/07/Gryffindor.png' alt='Gryffindor mascot'/> }
              {userHouse === 'Hufflepuff' && <img className='mascot-img' src='http://www.colleenmarielynch.com/Hufflepuff/crest2.gif' alt='Hufflepuff mascot'/>}
              {userHouse === 'Ravenclaw' && <img className='mascot-img' src='https://i.pinimg.com/originals/35/4d/01/354d01e48c6acd596e48f6c4bbb3b7da.jpg' alt='Ravenclaw mascot'/> }
              {userHouse === 'Slytherin' && <img className='mascot-img' src='https://www.pngkey.com/png/detail/226-2269266_slytherin-crest-png-harry-potter-slytherin-logo.png' alt='Slytherin mascot'/> }
            </Link>
            <NavLink to='/favourites'>
              <h2 className='fav-link'>Favourite Spells</h2>
            </NavLink>
        </nav>
    )
}

export const mapStateToProps = ({userHouse, nameOfWizard}) => ({
   userHouse,
   nameOfWizard
})

NavBar.propTypes = {
   userHouse: PropTypes.string,
   nameOfWizard: PropTypes.string
};

export default connect(mapStateToProps)(NavBar);