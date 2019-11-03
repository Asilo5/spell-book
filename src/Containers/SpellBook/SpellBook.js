import React from 'react';
import './SpellBook.css';

const SpellBook = ({id, spell, type, effect}) => {
  return (
      <section className='spells' id={id}>
          <div className='spell-container'>
            <img className='favourite-wand' src='https://gamepress.gg/wizardsunite/sites/wizardsunite/files/2019-04/Luna%20Lovegood-foundable_0.png' alt='luna lovegood wand to favourite spell card' />
            <div className='spell-info'>
              <h3>{spell}</h3>
              <h4>{type}</h4>
              <p>This {type} {effect}</p>
            </div>
          </div>
          <img className='paper-img' src='https://www.artsclip.com/background/XZHaFAgbeP-vintage-paper-scroll-for-short-news-slides.png' alt='background paper for spells' />
      </section>
  )
}

export default SpellBook;
