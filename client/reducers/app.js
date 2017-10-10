const defaultState = {
  counter: 1
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT_CALLBACK':
      return Object.assign({}, defaultState, state, {
        counter: state.counter + 1
      })
    case 'RECEIVE_BITCOIN_EXCHANGE_RATE':
      return Object.assign({}, defaultState, state, {
        bitcoinExchangeRate: action.bitcoinExchangeRate
      })
    default:
      return state;
  }
}

export default reducer
