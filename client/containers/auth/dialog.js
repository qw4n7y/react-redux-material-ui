import * as ReactRedux from 'react-redux'

import AuthDialog from './../../components/auth/dialog.jsx'
import Actions from './../../actions/index'

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  authenticate: () => {
    dispatch(Actions.auth.authenticate())
  },
  authenticateTest: () => {
    dispatch(Actions.auth.authenticateTest())
  }
})

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthDialog)
