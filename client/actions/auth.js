const authenticate = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(authenticateSuccessCallback({
        name: 'Yury'
      }))
    }, 1000)
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

const signout = () => ({
  type: 'AUTH_SIGNOUT'
})

export default {
  authenticateTest,
  authenticate,
  signout
}
