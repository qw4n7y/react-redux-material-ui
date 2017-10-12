require('typeface-roboto')
require('./styles/app.scss')

import { createStore } from './store'
const preloadedState = {}
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
const store = createStore(preloadedState, history)

import React from 'react'
import ReactDom from 'react-dom'
import * as ReactRouter from 'react-router'
import * as ReactRedux from 'react-redux'
import * as ReactRouterRedux from 'react-router-redux'

import Layout from './pages/_layout.jsx'
import Pages from './pages/index'

class App extends React.Component {
  constructor(props) {
    super(props)

    const getCurrentUser = () => store.getState().auth.currentUser

    this.state = {
      currentUser: getCurrentUser()
    }

    let currentUser = getCurrentUser()
    let unsubscribe = store.subscribe(() => {
      let previousCurrentUser = currentUser
      currentUser = getCurrentUser()
      if(previousCurrentUser != currentUser) {
        history.push('/')
        this.setState({currentUser: getCurrentUser()})
      }
    })
  }

  questRoutes() {
    return (<ReactRouter.Switch>
              <ReactRouter.Route exact path="/" component={Pages.landing}/>
            </ReactRouter.Switch>)
  }

  userRoutes() {
    return (<ReactRouter.Switch>
              <ReactRouter.Route exact path="/" component={Pages.index}/>
              <ReactRouter.Route path="/test" component={Pages.test}/>
            </ReactRouter.Switch>)
  }

  render () {
    const routes = (this.state.currentUser !== undefined) ? (
                      <Layout>
                        {this.userRoutes()}
                      </Layout>
                    ) : (
                      <div>
                        {this.questRoutes()}
                      </div>)

    return (<ReactRedux.Provider store={store}>
              <ReactRouterRedux.ConnectedRouter history={history}>
                {routes}
              </ReactRouterRedux.ConnectedRouter>
           </ReactRedux.Provider>)
  }
}

ReactDom.render(<App/>, document.getElementById('app'));
