import React from 'react';

const SpellBook = ({id, spell, type, effect}) => {
  return (
      <section id={id}>
          <div>
            <img className='favourite-wand' src='https://gamepress.gg/wizardsunite/sites/wizardsunite/files/2019-04/Luna%20Lovegood-foundable_0.png' alt='luna lovegood wand to favourite spell card' />
            <h2>{spell}</h2>
            <h3>{type}</h3>
            <p>{effect}</p>
          </div>
          <img className='paper-img' src='https://www.artsclip.com/background/XZHaFAgbeP-vintage-paper-scroll-for-short-news-slides.png' alt='background paper for spells' />
      </section>
  )
}

export default SpellBook;