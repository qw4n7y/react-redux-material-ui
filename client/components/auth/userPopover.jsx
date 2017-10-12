import React from 'react'
import PropTypes from 'prop-types'

import { Popover, Card, Button } from 'material-ui'
import * as CardElements from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
  card: {
    width: 345
  },
  media: {
    height: 200
  },
  button: {
    width: '100%'
  }
})

class UserPopover extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: props.open
    }
  }

  render() {
    return (<Popover
              open={this.props.open}
              anchorEl={this.props.anchorElement}
              onRequestClose={this.props.onClose}
              anchorOrigin={{
                vertical: 'Bottom',
                horizontal: 'Right'
              }}
              transformOrigin={{
                vertical: 'Top',
                horizontal: 'Right'
              }}>
              <Card className={this.props.classes.card}>
                <CardElements.CardMedia
                  className={this.props.classes.media}
                  image={"https://picsum.photos/345/200/?random"}>
                </CardElements.CardMedia>
                <CardElements.CardActions>
                  <Button dense color="primary" className={this.props.classes.button}>
                    Profile
                  </Button>
                  <Button dense color="primary" className={this.props.classes.button} onClick={this.props.signout}>
                    Logout
                  </Button>
                </CardElements.CardActions>
              </Card>
            </Popover>)
  }
}

UserPopover.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorElement: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  signout: PropTypes.func.isRequired
}

export default withStyles(styles)(UserPopover)
