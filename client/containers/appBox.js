import * as ReactRedux from 'react-redux'

import AppBox from './../components/appBox.jsx'
import Actions from './../actions/index'

const mapStateToProps = state => {
  return {
    open: state.ui.sideBarOpen,
    pinOpen: state.ui.sideBarPinOpen
  }
}

const mapDispatchToProps = dispatch => ({
  togglePinOpen: (value) => {
    dispatch(Actions.ui.sideBarTogglePinOpen(value))
  },
  toggleOpen: (value) => {
    dispatch(Actions.ui.sideBarToggleOpen(value))
  }
})

module.exports = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBox)
