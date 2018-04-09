// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  LIST_ROOMS_REQUEST,
  LIST_ROOMS_SUCCESS,
  LIST_ROOMS_FAIL,
  SET_VISIBILITY_FILTER,
} from '../constants/actionTypes'

const initialState = Immutable.fromJS({
  fetching: false,
  visibility_filter: 'active',
})

const lobbyReducer = (
  state: Immut = initialState,
  action: { type: string, payload: Object },
) => {
  switch (action.type) {
    case LIST_ROOMS_REQUEST:
      return { ...state, fetching: true }
    case LIST_ROOMS_SUCCESS:
      return { ...state, fetching: false, ...action.payload }
    case LIST_ROOMS_FAIL:
      return { ...state, fetching: false, error: { ...action.payload } }
    case SET_VISIBILITY_FILTER:
      return { ...state }
    default:
      return state
  }
}

export default lobbyReducer
