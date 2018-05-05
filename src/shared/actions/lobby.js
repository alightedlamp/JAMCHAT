// @flow

import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'
import * as api from '../utils/api'

export const listRoomsRequest = createAction(types.LIST_ROOMS_REQUEST)
export const listRoomsSuccess = createAction(types.LIST_ROOMS_SUCCESS)
export const listRoomsFail = createAction(types.LIST_ROOMS_FAIL)

export const listRooms = () => (dispatch: Function) => {
  dispatch(listRoomsRequest())
  api
    .listRooms()
    .then(res =>
      dispatch(listRoomsSuccess({
        rooms: res.data,
      })))
    .catch(err => dispatch(listRoomsFail(err)))
}

export default listRooms
