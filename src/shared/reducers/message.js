// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  POST_MESSAGE_REQUEST,
  POST_MESSAGE_SUCCESS,
  POST_MESSAGE_FAIL,
  RECEIVE_MESSAGE,
} from '../constants/actionTypes'

const initialState = Immutable.fromJS({})

const messageReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case POST_MESSAGE_REQUEST:
      return state
    case POST_MESSAGE_SUCCESS:
      return state
    case POST_MESSAGE_FAIL:
      return state
    case RECEIVE_MESSAGE:
      return state
    default:
      return state
  }
}

export default messageReducer
