// @flow

import { cMajor } from '../constants/instrument'

import {
  EDIT_SEQUENCE,
  CLEAR_SEQUENCE,
  SAVE_SEQUENCE_REQUEST,
  SAVE_SEQUENCE_SUCCESS,
  SAVE_SEQUENCE_FAIL,
  TRANSLATE_MESSAGE_TO_SEQUENCE,
} from '../constants/actionTypes'

// mes: "hey what's going on"
// scale: 'C', 'D', 'E', 'F', 'G', 'A', 'B'
// output: E, A, G, _, E, A, G, _, E, A, G, _, E, A, G, _
const translateMessageToSequence = (msg) => {}

const editSequence = (state, action) => {
  const newSequence = state.sequence.slice()
  newSequence.splice(action.payload.idx, 0, action.payload.note)
  return newSequence
}

const sequencerReducer = (
  state: Object = {
    saving: false,
    sequence: [],
  },
  action: { type: string, payload: Object },
) => {
  switch (action.type) {
    case EDIT_SEQUENCE:
      return { ...state, sequence: editSequence(state, action) }
    case CLEAR_SEQUENCE:
      return { ...state, sequence: [] }
    case TRANSLATE_MESSAGE_TO_SEQUENCE:
      return {
        ...state,
        sequence: translateMessageToSequence(action.payload.content),
      }
    case SAVE_SEQUENCE_REQUEST:
      return { ...state, saving: true }
    case SAVE_SEQUENCE_SUCCESS:
      return { ...state, saving: false }
    case SAVE_SEQUENCE_FAIL:
      return { ...state, error: { ...action.payload } }
    default:
      return state
  }
}

export default sequencerReducer
