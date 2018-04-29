// @flow

import {
  START_ARRANGEMENT,
  STOP_ARRANGEMENT,
  GET_ARRANGEMENT_REQUEST,
  GET_ARRANGEMENT_SUCCESS,
  GET_ARRANGEMENT_FAIL,
  ADD_SEQUENCE_TO_ARRANGEMENT_REQUEST,
  ADD_SEQUENCE_TO_ARRANGEMENT_SUCCESS,
  ADD_SEQUENCE_TO_ARRANGEMENT_FAIL,
} from '../constants/actionTypes'

const arrangementReducer = (
  state: Object = {
    arrangement: [],
    playing: false,
  },
  action: { type: string, payload: Object },
) => {
  switch (action.type) {
    case START_ARRANGEMENT:
      return { ...state, playing: true }
    case STOP_ARRANGEMENT:
      return { ...state, playing: false }
    case GET_ARRANGEMENT_REQUEST:
      return state
    case GET_ARRANGEMENT_SUCCESS:
      return state
    case GET_ARRANGEMENT_FAIL:
      return state
    case ADD_SEQUENCE_TO_ARRANGEMENT_REQUEST:
      return state
    case ADD_SEQUENCE_TO_ARRANGEMENT_SUCCESS:
      return state
    case ADD_SEQUENCE_TO_ARRANGEMENT_FAIL:
      return state
    default:
      return state
  }
}

export default arrangementReducer
