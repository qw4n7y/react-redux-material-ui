import * as ReactRouterRedux from 'react-router-redux'

const authenticate = (provider) => {
  const url = `/auth/${provider}`
  return (dispatch, getState) => {
    // dispatch(ReactRouterRedux.replace(url))
    window.location = url
  }
}

const authenticateTest = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(authenticateSuccessCallback({
        name: 'Yury'
      }))
    }, 1000)
  }
}

const authenticateSuccessCallback = (user) => ({
  type: 'AUTH_SUCCESS',
  user: user
})

const logout = () => {
  const url = `/logout`
  return (dispatch, getState) => {
    // dispatch(ReactRouterRedux.replace(url))
    window.location = url
  }
}

export default {
  authenticateTest,
  authenticate,
  logout
}
