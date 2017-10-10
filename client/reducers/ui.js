import Cookies from 'cookies-js'

const defaultState = {
  sideBarOpen: false,
  sideBarPinOpen: false
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'UI_SIDEBAR_TOGGLE_OPEN':
      return Object.assign({}, defaultState, state, {
        sideBarOpen: (action.value !== undefined) ? action.value : !state.sideBarOpen
      })
    case 'UI_SIDEBAR_TOGGLE_PIN_OPEN':
      const value = (action.value !== undefined) ? action.value : !state.sideBarPinOpen
      Cookies.set('sideBarPinOpen', value)
      return Object.assign({}, defaultState, state, {
        sideBarPinOpen: value
      })
    default:
      return state;
  }
}

export default reducer
