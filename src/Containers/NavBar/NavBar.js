import React from 'react';
import { connect } from 'react-redux';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({userHouse, nameOfWizard}) => {
   console.log(userHouse);
    return (
        <nav>
            <h2>{nameOfWizard}</h2>
            <Link to='/'>
              {userHouse === 'Gryffindor' && <img className='mascot-img' src='https://vignette.wikia.nocookie.net/thedailyquibbler/images/0/00/Gryffindor.gif/revision/latest/scale-to-width-down/240?cb=20140719233928' alt='Gryffindor mascot'/> }
              {userHouse === 'HufflePuff' && <img className='mascot-img' src='http://www.colleenmarielynch.com/Hufflepuff/crest2.gif' alt='Hufflepuff mascot'/>}
              {userHouse === 'Ravenclaw' && <img className='mascot-img' src='https://i.pinimg.com/originals/35/4d/01/354d01e48c6acd596e48f6c4bbb3b7da.jpg' alt='Ravenclaw mascot'/> }
              {userHouse === 'Slytherin' && <img className='mascot-img' src='https://www.pngkey.com/png/detail/226-2269266_slytherin-crest-png-harry-potter-slytherin-logo.png' alt='Slytherin mascot'/> }
            </Link>
            <h2>Favourite Spells</h2>
        </nav>
    )
}

export const mapStateToProps = ({userHouse, nameOfWizard}) => ({
   userHouse,
   nameOfWizard
})

export default connect(mapStateToProps)(NavBar);