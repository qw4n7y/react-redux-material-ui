import * as Redux from 'redux'

export default Redux.combineReducers({
  app: require('./app').default,
  ui: require('./ui').default
})
