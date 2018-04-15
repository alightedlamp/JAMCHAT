// @flow

import axios from 'axios'
import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'
import * as types from '../constants/actionTypes'

import {
  IO_CLIENT_JOIN_ROOM,
  IO_CLIENT_LEAVE_ROOM,
} from '../constants/messageTypes'
import { CREATE_ROOM_ROUTE, jamPageRoute } from '../routes'

export const setVisibilityFilter = createAction(types.SET_VISIBILITY_FILTER)

export const createRoomRequest = createAction(types.CREATE_ROOM_REQUEST)
export const createRoomSuccess = createAction(types.CREATE_ROOM_SUCCESS)
export const createRoomFail = createAction(types.CREATE_ROOM_FAIL)

export const joinRoomRequest = createAction(types.JOIN_ROOM_REQUEST)
export const joinRoomSuccess = createAction(types.JOIN_ROOM_SUCCESS)
export const joinRoomFail = createAction(types.JOIN_ROOM_FAIL)

export const leaveRoomRequest = createAction(types.LEAVE_ROOM_REQUEST)
export const leaveRoomSuccess = createAction(types.LEAVE_ROOM_SUCCESS)
export const leaveRoomFail = createAction(types.LEAVE_ROOM_FAIL)

export const setJamBpm = createAction(types.SET_JAM_BPM)

export const joinRoom = (data: Object) => (
  dispatch: Function,
  getState,
  { emit },
) => {
  dispatch(joinRoomRequest())
  axios
    .post(jamPageRoute(data.id), { action: 'join' })
    .then(res =>
      dispatch(joinRoomSuccess({
        // eslint-disable-next-line
          id: res.data.room._id,
        title: res.data.room.title,
        created_by: res.data.room.created_by,
        users: res.data.room.users,
        user: res.data.user,
      })))
    .then((action) => {
      emit(IO_CLIENT_JOIN_ROOM, {
        room_id: action.payload.id,
        user: action.payload.user,
      })
      dispatch(push(jamPageRoute(action.payload.id)))
    })
    .catch(err => dispatch(joinRoomFail(err)))
}

export const createRoom = (data: Object) => (dispatch: Function) => {
  dispatch(createRoomRequest())
  axios
    .post(CREATE_ROOM_ROUTE, { ...data, action: 'create' })
    .then(res =>
      dispatch(createRoomSuccess({
        id: res.data._id,
        bpm: data.bpm,
      })))
    .then((action) => {
      if (action.payload.id) {
        dispatch(joinRoom({ id: action.payload.id }))
      } else {
        throw new Error('Cannot join room')
      }
    })
    .catch(err => dispatch(createRoomFail(err)))
}

export const leaveRoom = (data: Object) => (
  dispatch: Function,
  getState,
  { emit },
) => {
  dispatch(leaveRoomRequest())
  axios
    .post(jamPageRoute(data.room_id), {
      username: data.username,
      action: 'leave',
    })
    .then(() => {
      emit(IO_CLIENT_LEAVE_ROOM, {
        room_id: data.room_id,
        user_id: data.user_id,
      })
      dispatch(leaveRoomSuccess())
    })
    .catch(err => dispatch(leaveRoomFail(err)))
}
