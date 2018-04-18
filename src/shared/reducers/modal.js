// @flow

import { TOGGLE_MODAL } from '../constants/actionTypes'

const modalReducer = (
  state: Object = { modalIsOpen: false },
  action: { type: string, payload: object },
) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      const newState = !state.modalIsOpen
      return { modalIsOpen: newState }
    }
    default:
      return state
  }
}

export default modalReducer
