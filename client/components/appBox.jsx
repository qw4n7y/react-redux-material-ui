import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';

import {Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, MenuItem} from 'material-ui'
import {Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, AccountBalance as AccountBalanceIcon,
        AirlineSeatLegroomExtra as AirlineSeatLegroomExtraIcon, AirlineSeatLegroomReduced as AirlineSeatLegroomReducedIcon} from 'material-ui-icons'

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
  }
});

class MiniDrawer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: this.props.open || this.props.pinOpen
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

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
            <Toolbar disableGutters={!this.state.open}>
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
                <MenuItem>
                  <AccountBalanceIcon className={classes.menuItemIcon} component="h3"/>
                  MenuItem 1
                </MenuItem>
                <MenuItem>
                  <AccountBalanceIcon className={classes.menuItemIcon} component="h3"/>
                  MenuItem 2
                </MenuItem>
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
