require('typeface-roboto')
require('./styles/app.scss')

import React from 'react'
import ReactDom from 'react-dom'

import { createStore } from './store'

const preloadedState = {}
const store = createStore(preloadedState)

import Services from './services'
Services.run(store)

import * as ReactRedux from 'react-redux'
import IndexPage from './pages/index.jsx'

class App extends React.Component {
  render () {
    return (<ReactRedux.Provider store={store}>
              <IndexPage/>
           </ReactRedux.Provider>)
  }
}

ReactDom.render(<App/>, document.getElementById('app'));
