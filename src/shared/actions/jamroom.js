// @flow

import axios from 'axios'
import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'
import * as types from '../constants/actionTypes'

import { LIST_ROOMS_ROUTE, CREATE_ROOM_ROUTE, jamPageRoute } from '../routes'

export const listRoomsRequest = createAction(types.LIST_ROOMS_REQUEST)
export const listRoomsSuccess = createAction(types.LIST_ROOMS_SUCCESS)
export const listRoomsFail = createAction(types.LIST_ROOMS_FAIL)

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

export const listRooms = () => (dispatch: Function) => {
  dispatch(listRoomsRequest)
  axios
    .get(LIST_ROOMS_ROUTE)
    .then(res =>
      dispatch(listRoomsSuccess({
        rooms: res.rooms,
      })))
    .catch(err => dispatch(listRoomsFail(err)))
}

export const createRoom = (data: Object) => (dispatch: Function) => {
  dispatch(createRoomRequest)
  axios
    .post(CREATE_ROOM_ROUTE, data)
    .then(res =>
      dispatch(createRoomSuccess({
        user: res.data.username,
        title: res.data.title,
        bpm: res.data.bpm,
      })))
    .then(id => dispatch(push(`/${id}`))) // front end will handle entering room for first time
    .catch(err => dispatch(createRoomFail(err)))
}

export const joinRoom = (data: Object) => (dispatch: Function) => {
  dispatch(joinRoomRequest)
  axios
    .post(jamPageRoute(data.room_id), { user_id: data.user_id, action: 'join' })
    .then(() => dispatch(joinRoomSuccess()))
    .catch(err => dispatch(joinRoomFail(err)))
}

export const leaveRoom = (data: Object) => (dispatch: Function) => {
  dispatch(leaveRoomRequest)
  axios
    .post(jamPageRoute(data.room_id), { user_id: data.user_id, action: 'leave' })
    .then(() => dispatch(leaveRoomSuccess()))
    .catch(err => dispatch(leaveRoomFail(err)))
}
