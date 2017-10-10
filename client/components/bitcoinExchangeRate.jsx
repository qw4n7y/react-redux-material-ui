import * as React from 'react'
import * as PropTypes from 'prop-types'

import { Typography, Paper } from 'material-ui'

class BitcoinExchangeRate extends React.Component {
  render() {
    return (<div>
              <Paper>
                <Typography type="headline">
                  {this.props.bitcoinExchangeRate ? `1 BTC = ${this.props.bitcoinExchangeRate}$` : "UNKNOWN"}
                </Typography>
              </Paper>
            </div>)
  }
}

BitcoinExchangeRate.propTypes = {
  bitcoinExchangeRate: PropTypes.number
}

export default BitcoinExchangeRate
