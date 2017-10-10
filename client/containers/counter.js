import * as ReactRedux from 'react-redux'

import Counter from './../components/counter.jsx'
import Actions from './../actions/index'

const mapStateToProps = state => {
  return {
    counter: state.app.counter
  }
}

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(Actions.app.increment())
  }
})

module.exports = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
