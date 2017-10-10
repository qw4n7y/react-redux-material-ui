import * as ReactRedux from 'react-redux'

import BitcoinExchangeRate from './../components/bitcoinExchangeRate.jsx'
import Actions from './../actions/index'

const mapStateToProps = state => {
  return {
    bitcoinExchangeRate: state.app.bitcoinExchangeRate
  }
}

const mapDispatchToProps = dispatch => ({
})

module.exports = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(BitcoinExchangeRate)
