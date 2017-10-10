import Actions from './actions/index'

class Services {
  static run(store) {
    setTimeout(() => {
      store.dispatch(Actions.app.requestBitcoinExchangeRate())
    }, 1000)
  }
}

export default Services
