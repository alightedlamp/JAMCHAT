// @flow

import {
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_FAIL,
  JOIN_ROOM_REQUEST,
  JOIN_ROOM_SUCCESS,
  JOIN_ROOM_FAIL,
  LEAVE_ROOM_REQUEST,
  LEAVE_ROOM_SUCCESS,
  LEAVE_ROOM_FAIL,
} from '../constants/actionTypes'

const jamRoomReducer = (
  state: Object = {},
  action: { type: string, payload: Object },
) => {
  switch (action.type) {
    case CREATE_ROOM_REQUEST:
      return { ...state, fetching: true }
    case CREATE_ROOM_SUCCESS:
      return { ...state, ...action.payload }
    case CREATE_ROOM_FAIL:
      return { ...state, error: { ...action.payload } }
    case JOIN_ROOM_REQUEST:
      return { ...state, fetching: true }
    case JOIN_ROOM_SUCCESS:
      return { ...state, fetching: false, ...action.payload }
    case JOIN_ROOM_FAIL:
      return { ...state, error: { ...action.payload } }
    case LEAVE_ROOM_REQUEST:
      return { ...state, fetching: true }
    case LEAVE_ROOM_SUCCESS:
      return { ...state, ...action.payload }
    case LEAVE_ROOM_FAIL:
      return { ...state, error: { ...action.payload } }
    default:
      return state
  }
}

export default jamRoomReducer
