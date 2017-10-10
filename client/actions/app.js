const increment = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(incrementCallback())
    }, 1000)
  }
}

const requestBitcoinExchangeRate = () => {
  const URL = "https://blockchain.info/ticker"

  return (dispatch, getState) => {
    fetch(URL).
      then(response => response.json()).
      then(json => {
        const bitcoinExchangeRate = json.USD.last
        dispatch(receiveBitcoinExchangeRate(bitcoinExchangeRate))
      })
  }
}

const receiveBitcoinExchangeRate = (bitcoinExchangeRate) => ({
  type: 'RECEIVE_BITCOIN_EXCHANGE_RATE',
  bitcoinExchangeRate: bitcoinExchangeRate
})

const incrementCallback = () => ({
  type: 'INCREMENT_CALLBACK'
})

export default {
  increment,
  incrementCallback,
  requestBitcoinExchangeRate,
  receiveBitcoinExchangeRate
}
