// @flow

import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'
import * as types from '../constants/actionTypes'
import * as api from '../utils/api'

import {
  IO_CLIENT_JOIN_ROOM,
  IO_CLIENT_LEAVE_ROOM,
} from '../constants/messageTypes'

export const setVisibilityFilter = createAction(types.SET_VISIBILITY_FILTER)

export const joinRoomRequest = createAction(types.JOIN_ROOM_REQUEST)
export const joinRoomSuccess = createAction(types.JOIN_ROOM_SUCCESS)
export const joinRoomFail = createAction(types.JOIN_ROOM_FAIL)

export const joinRoom = (data: Object) => (
  dispatch: Function,
  getState: Function,
  { emit }: Function,
) => {
  dispatch(joinRoomRequest())
  api
    .joinRoom(data)
    .then(res =>
      dispatch(joinRoomSuccess({
          id: res.data.room._id, // eslint-disable-line
        title: res.data.room.title,
        created_by: res.data.room.created_by,
        users: res.data.room.users,
        bpm: res.data.room.bpm,
      })))
    .then((action) => {
      emit(IO_CLIENT_JOIN_ROOM, {
        room_id: action.payload.id,
        user: action.payload.user,
      })
    })
    .catch(err => dispatch(joinRoomFail(err)))
}

export const createRoomRequest = createAction(types.CREATE_ROOM_REQUEST)
export const createRoomSuccess = createAction(types.CREATE_ROOM_SUCCESS)
export const createRoomFail = createAction(types.CREATE_ROOM_FAIL)

export const createRoom = (data: Object) => (dispatch: Function) => {
  dispatch(createRoomRequest())
  api
    .createRoom(data)
    .then(res =>
      dispatch(createRoomSuccess({
          id: res.data._id, // eslint-disable-line
        title: data.title,
        bpm: data.bpm,
      })))
    .then((action) => {
      if (action.payload.id) {
        // The Jam page onMount dispatches joinRoom action sequences
        dispatch(push(jamPageRoute(action.payload.id)))
      } else {
        throw new Error('Cannot join room')
      }
    })
    .catch(err => dispatch(createRoomFail(err)))
}

export const leaveRoomRequest = createAction(types.LEAVE_ROOM_REQUEST)
export const leaveRoomSuccess = createAction(types.LEAVE_ROOM_SUCCESS)
export const leaveRoomFail = createAction(types.LEAVE_ROOM_FAIL)

export const leaveRoom = (data: Object) => (
  dispatch: Function,
  getState,
  { emit },
) => {
  dispatch(leaveRoomRequest())
  api
    .leaveRoom(data)
    .then(() => {
      emit(IO_CLIENT_LEAVE_ROOM, {
        room_id: data.room_id,
        user_id: data.user_id,
      })
      dispatch(leaveRoomSuccess())
    })
    .catch(err => dispatch(leaveRoomFail(err)))
}

export const setJamBpm = createAction(types.SET_JAM_BPM)
