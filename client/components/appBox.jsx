import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from 'material-ui/styles'

import * as ReactRouterDom from 'react-router-dom'

import {Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, MenuItem, Button} from 'material-ui'
import {Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, AccountBalance as AccountBalanceIcon,
        AirlineSeatLegroomExtra as AirlineSeatLegroomExtraIcon, AirlineSeatLegroomReduced as AirlineSeatLegroomReducedIcon} from 'material-ui-icons'

import UserPopover from './../containers/auth/userPopover'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: Object.assign({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // 'flex-end',
    padding: '0 8px',
    flexGrow: '1'
  }, theme.mixins.toolbar),
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  menuItemIcon: {
    marginLeft: '0.2em',
    marginRight: '1em'
  },
  link: {
    textDecoration: 'none',
    '&.active': {
      fontWeight: 'bold'
    }
  },
  toolbar: {
    justifyContent: 'space-between'
  }
});

class MiniDrawer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: this.props.open || this.props.pinOpen,
      userPopoverOpen: false
    }

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
    this.togglePinOpen = this.togglePinOpen.bind(this)
  }

  handleDrawerOpen() {
    this.setState({ open: true }, () => {
      this.props.toggleOpen(true)
    })
  }

  handleDrawerClose() {
    this.setState({ open: false }, () => {
      this.props.toggleOpen(false)
    })
  }

  togglePinOpen() {
    this.props.togglePinOpen()
  }

  handleUserPopoverOpen() {
    this.setState({
      userPopoverOpen: true,
      userPopoverAnchorElement: ReactDom.findDOMNode(this.userPopoverAnchorElement)
    })
  }

  handleUserPopoverClose() {
    this.setState({
      userPopoverOpen: false
    })
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, this.state.open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                Rule the world
              </Typography>
              <IconButton color="contrast" ref={(node) => { this.userPopoverAnchorElement = node }}
                          onClick={this.handleUserPopoverOpen.bind(this)}>
                <MenuIcon />
              </IconButton>
              <UserPopover open={this.state.userPopoverOpen}
                           onClose={this.handleUserPopoverClose.bind(this)}
                           anchorElement={this.state.userPopoverAnchorElement}/>
            </Toolbar>
          </AppBar>
          <Drawer
            type="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.togglePinOpen}>
                  {this.props.pinOpen ? <AirlineSeatLegroomExtraIcon/> : <AirlineSeatLegroomReducedIcon/>}
                </IconButton>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List className={classes.list}>
                <ReactRouterDom.NavLink to="/" className={classes.link}>
                  <MenuItem>
                    <AccountBalanceIcon className={classes.menuItemIcon} component="h3"/>
                    Index
                  </MenuItem>
                </ReactRouterDom.NavLink>
                <ReactRouterDom.NavLink to="/test" className={classes.link}>
                  <MenuItem>
                    <AccountBalanceIcon className={classes.menuItemIcon} component="h3"/>
                    Test
                  </MenuItem>
                </ReactRouterDom.NavLink>
              </List>
            </div>
          </Drawer>
          <main className={classes.content}>
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  open: PropTypes.bool,
  pinOpen: PropTypes.bool,
  togglePinOpen: PropTypes.func.isRequired,
  toggleOpen: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer)
