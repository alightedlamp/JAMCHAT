// @flow

import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'
import * as types from '../constants/actionTypes'
import * as api from '../utils/api'

export const registerUserRequest = createAction(types.REGISTER_USER_REQUEST)
export const registerUserSuccess = createAction(types.REGISTER_USER_SUCCESS)
export const registerUserFail = createAction(types.REGISTER_USER_FAIL)

export const registerUser = (data: Object) => (dispatch: Function) => {
  dispatch(registerUserRequest())
  return api
    .registerUser(data)
    .then(res =>
      dispatch(registerUserSuccess({
        id: res.data.id,
        username: res.data.username,
        authenticated: true,
      })))
    .then(() => dispatch(push('/lobby')))
    .catch(err => dispatch(registerUserFail(err)))
}

export const loginUserRequest = createAction(types.LOGIN_USER_REQUEST)
export const loginUserSuccess = createAction(types.LOGIN_USER_SUCCESS)
export const loginUserFail = createAction(types.LOGIN_USER_FAIL)

export const loginUser = (data: Object) => (dispatch: Function) => {
  dispatch(loginUserRequest())
  return api
    .loginUser(data)
    .then(res =>
      dispatch(loginUserSuccess({
        id: res.data.id,
        username: res.data.username,
        authenticated: true,
      })))
    .then(() => dispatch(push('/lobby')))
    .catch(err => dispatch(loginUserFail(err)))
}

export const logoutUserRequest = createAction(types.LOGOUT_USER_REQUEST)
export const logoutUserSuccess = createAction(types.LOGOUT_USER_SUCCESS)
export const logoutUserFail = createAction(types.LOGOUT_USER_FAIL)

export const logoutUser = () => (dispatch: Function) => {
  dispatch(logoutUserRequest())
  return api
    .logoutUser()
    .then(() => dispatch(logoutUserSuccess()))
    .then(() => dispatch(push('/')))
    .catch(err => dispatch(logoutUserFail(err)))
}

export const setUserInstrumentRequest = createAction(types.SET_USER_INSTRUMENT_REQUEST)
export const setUserInstrumentSuccess = createAction(types.SET_USER_INSTRUMENT_SUCCESS)
export const setUserInstrumentFail = createAction(types.SET_USER_INSTRUMENT_FAIL)

/*
  setInstrument takes in a data object with the userID and the instrument values
  The logic for determining the user's instrument occurs in the controller
*/
export const setInstrument = (data: Object) => (dispatch: Function) => {
  dispatch(setInstrumentRequest())
}
