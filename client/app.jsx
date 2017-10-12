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
import IndexPage from './pages/index.jsx'
import TestPage from './pages/test.jsx'

class App extends React.Component {
  render () {
    return (<ReactRedux.Provider store={store}>
              <ReactRouterRedux.ConnectedRouter history={history}>
                <Layout>
                  <ReactRouter.Switch>
                    <ReactRouter.Route exact path="/index" component={IndexPage}/>
                    <ReactRouter.Route path="/test" component={TestPage}/>
                  </ReactRouter.Switch>
                </Layout>
              </ReactRouterRedux.ConnectedRouter>
           </ReactRedux.Provider>)
  }
}

ReactDom.render(<App/>, document.getElementById('app'));
