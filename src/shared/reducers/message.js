// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  POST_MESSAGE_REQUEST,
  POST_MESSAGE_SUCCESS,
  POST_MESSAGE_FAIL,
  RECEIVE_MESSAGE,
} from '../constants/actionTypes'

const initialState = Immutable.fromJS({ posting: false, messages: [] })

const messageReducer = (
  state: Immut = initialState,
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    case POST_MESSAGE_REQUEST:
      return { ...state, posting: true }
    case POST_MESSAGE_SUCCESS:
      return { ...state, posting: false, ...action.payload }
    case POST_MESSAGE_FAIL:
      return { ...state, posting: false, error: { ...action.payload } }
    case RECEIVE_MESSAGE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default messageReducer
