import * as ReactRedux from 'react-redux'

import UserPopover from './../../components/auth/userPopover.jsx'
import Actions from './../../actions/index'

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(Actions.auth.logout())
  }
})

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPopover)
