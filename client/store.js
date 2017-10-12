import * as Redux from 'redux'
import ReduxThunk from 'redux-thunk'
import * as ReactRouterRedux from 'react-router-redux'

import Cookies from 'cookies-js'

const defaultState = {
  app: {
    counter: 999
  },
  ui: {
    sideBarPinOpen: Cookies.get('sideBarPinOpen') == 'true'
  },
  auth: {
    currentUser: undefined // { name: 'Yury' }
  }
}

import { composeWithDevTools } from 'redux-devtools-extension'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools({})

import reducers from './reducers/index'

/**
 * Creates a Redux store
 * @param {object} state - The preinitialized app store state
 * @param {history} history - Session history object (https://www.npmjs.com/package/history)
 */
const createStore = (state, history) => {
  if(Object.keys(state).length == 0) {
    state = Object.assign({}, defaultState)
  }
  const reducer = Redux.combineReducers(Object.assign({}, reducers, {
    router: ReactRouterRedux.routerReducer
  }))
  const routerMiddleware = ReactRouterRedux.routerMiddleware(history)

  return Redux.createStore(reducer, state, composeEnhancers(
                                              Redux.applyMiddleware(ReduxThunk, routerMiddleware)
                                            ))
}

export { createStore }
