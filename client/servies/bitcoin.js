import Actions from './../actions/index'

class BitcoinService {
  start(store) {
    this.timeout = setTimeout(() => {
      store.dispatch(Actions.app.requestBitcoinExchangeRate())
    }, 1000)
  }

  stop() {
    clearTimeout(this.timeout)
  }
}

export default BitcoinService
