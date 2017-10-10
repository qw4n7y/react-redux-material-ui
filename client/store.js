import * as Redux from 'redux'
import ReduxThunk from 'redux-thunk'

import Cookies from 'cookies-js'

const defaultState = {
  app: {
    counter: 999
  },
  ui: {
    sideBarPinOpen: Cookies.get('sideBarPinOpen') == 'true'
  }
}

import { composeWithDevTools } from 'redux-devtools-extension'
const composeEnhancers = composeWithDevTools({})

import reducer from './reducers/index'

const createStore = (state = defaultState) => {
  if(Object.keys(state).length == 0) {
    state = Object.assign({}, defaultState)
  }
  return Redux.createStore(reducer, state, composeEnhancers(
                                              Redux.applyMiddleware(ReduxThunk)
                                            ))
}

export { createStore }
