const sideBarToggleOpen = (value = undefined) => ({
  type: "UI_SIDEBAR_TOGGLE_OPEN",
  value: value
})

const sideBarTogglePinOpen = (value = undefined) => ({
  type: "UI_SIDEBAR_TOGGLE_PIN_OPEN",
  value: value
})

export default {
  sideBarToggleOpen,
  sideBarTogglePinOpen
}
