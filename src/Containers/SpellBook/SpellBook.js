import React from 'react';

const SpellBook = ({id, spell, type, effect}) => {
    console.log(spell);
  return (
      <section id={id}>
          <h2>{spell}</h2>
          <h3>{type}</h3>
          <p>{effect}</p>
      </section>
  )
}

export default SpellBook;