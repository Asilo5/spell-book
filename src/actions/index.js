export const givenHouse = (house) => ({
    type: 'GIVEN_HOUSE',
    house
});

export const isLoading = (bool) => ({
    type: 'IS_LOADING',
    bool
});

export const wizardsName = (name) => ({
  type: 'NAME',
  name
});

export const hasError = (error) => ({
  type: 'HAS_ERROR',
  error
})

export const hasSpells = (spells) => ({
  type: 'HAS_SPELLS',
  spells
})