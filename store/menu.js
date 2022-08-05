export const state = () => ({
  isOpened: false,
})

export const mutations = {
  toggle(state) {
    state.isOpened = !state.isOpened
  },
  closeMenu(state) {
    state.isOpened = false
  },
}

export const getters = {
  // menu: (state) => state.isOpened,
  getMenuState(state) {
    return state.isOpened
  },
}
