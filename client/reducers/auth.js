const defaultState = {
  currentUser: undefined
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return Object.assign({}, defaultState, state, {
        currentUser: action.user
      })
    case 'AUTH_SIGNOUT':
      return Object.assign({}, defaultState, state, {
        currentUser: undefined
      })
    default:
      return state;
  }
}

export default reducer
