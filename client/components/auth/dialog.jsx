import React from 'react'
import PropTypes from 'prop-types'

import { Button, Dialog } from 'material-ui'
import * as DialogElements from 'material-ui/Dialog'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  button: {
    width: '100%'
  },
  heading: {
    marginBottom: '20px'
  }
})

class AuthDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: props.open
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open
    })
  }

  onClose() {
    this.setState({
      open: false
    })
    this.props.onClose()
  }

  render() {
    return (<Dialog open={this.state.open} onRequestClose={this.onClose.bind(this)}>
              <DialogElements.DialogTitle>Glad to see you!</DialogElements.DialogTitle>
              <DialogElements.DialogContent>
                <DialogElements.DialogContentText className={this.props.classes.heading}>
                  Please authenticate via
                </DialogElements.DialogContentText>
                <Button onClick={() => this.props.authenticate('facebook')} color="primary" className={this.props.classes.button}>
                  Facebook
                </Button>
                <Button onClick={this.props.authenticateTest} color="primary" className={this.props.classes.button}>
                  Test
                </Button>
              </DialogElements.DialogContent>
              <DialogElements.DialogActions>
                <Button onClick={this.onClose.bind(this)} color="primary">
                  Cancel
                </Button>
              </DialogElements.DialogActions>
            </Dialog>)
  }
}

AuthDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
  authenticate: PropTypes.func.isRequired,
  authenticateTest: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AuthDialog)
