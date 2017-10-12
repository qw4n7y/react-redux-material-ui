import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import {AppBar, Toolbar, Typography, Button, Paper} from 'material-ui'

import AuthDialog from './../containers/auth/dialog'

const styles = theme => ({
  flex: {
    flex: 1,
  },
  jumbotron: theme.mixins.gutters({
    padding: 16,
    margin: theme.spacing.unit * 3,
  }),
  logo: theme.mixins.gutters({
    margin: theme.spacing.unit * 3,
    background: {
      image: "url('https://picsum.photos/600/300/?random')",
      position: 'center',
      repeat: 'no-repeat',
      size: 'cover'
    },
    height: '250px'
  })
});

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openAuthDialog: false
    }
  }

  handleClickLogin() {
    this.setState({
      openAuthDialog: true
    })
  }

  handleAuthDialogClose() {
    this.setState({
      openAuthDialog: false
    })
  }

  render() {
    return (<div>
              <AuthDialog open={this.state.openAuthDialog} onClose={this.handleAuthDialogClose.bind(this)}/>

              <AppBar position="static">
                <Toolbar>
                  <Typography type="title" color="inherit" className={this.props.classes.flex}>
                    Rule the world
                  </Typography>
                  <Button color="contrast" onClick={this.handleClickLogin.bind(this)}>
                    Login
                  </Button>
                </Toolbar>
              </AppBar>

              <Paper className={this.props.classes.logo} elevation={4}>
              </Paper>

              <Paper className={this.props.classes.jumbotron} elevation={4}>
                <Typography type="headline" component="h3">
                  Rule the world
                </Typography>
                <Typography type="body1" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis quam, dictum eu euismod quis, accumsan vel mi. Aliquam erat volutpat. Nam at tortor sodales, convallis risus vitae, vulputate ex. Donec sit amet ultricies ante, ut varius ante. Praesent volutpat convallis ligula, eu ornare ex ornare eu. Morbi eleifend lacus non gravida porttitor. Aenean eleifend, ante id condimentum imperdiet, tellus lacus mattis dui, sed consequat mauris justo vel arcu. Nulla facilisi. Donec ac tempor libero. Quisque cursus pharetra dui mattis euismod. Maecenas dignissim accumsan augue, et viverra nisi malesuada tincidunt. Morbi laoreet suscipit dapibus. Praesent eget lorem risus. Maecenas dapibus nisl non nunc porta pretium. Cras sed dolor sit amet ante semper egestas. Fusce pulvinar ante vehicula nisl dictum convallis.
                </Typography>
              </Paper>
            </div>)
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LandingPage)
