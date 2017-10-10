import * as React from 'react'
import * as PropTypes from 'prop-types'

import { Button, Paper } from 'material-ui'

class Counter extends React.Component {
  render() {
    return (<Paper>
              <Button onClick={this.props.handleClick}>
                {this.props.counter}
              </Button>
            </Paper>)
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Counter
