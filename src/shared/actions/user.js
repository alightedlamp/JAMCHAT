// @flow

import axios from 'axios'
import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'
import * as types from '../constants/actionTypes'

import { USER_REGISTER_ROUTE, USER_LOGIN_ROUTE, USER_LOGOUT_ROUTE } from '../routes'

export const registerUserRequest = createAction(types.REGISTER_USER_REQUEST)
export const registerUserSuccess = createAction(types.REGISTER_USER_SUCCESS)
export const registerUserFail = createAction(types.REGISTER_USER_FAIL)

export const loginUserRequest = createAction(types.LOGIN_USER_REQUEST)
export const loginUserSuccess = createAction(types.LOGIN_USER_SUCCESS)
export const loginUserFail = createAction(types.LOGIN_USER_FAIL)

export const logoutUserRequest = createAction(types.LOGOUT_USER_REQUEST)
export const logoutUserSuccess = createAction(types.LOGOUT_USER_SUCCESS)
export const logoutUserFail = createAction(types.LOGOUT_USER_FAIL)

export const setUserInstrumentRequest = createAction(types.SET_USER_INSTRUMENT_REQUEST)
export const setUserInstrumentSuccess = createAction(types.SET_USER_INSTRUMENT_SUCCESS)
export const setUserInstrumentFail = createAction(types.SET_USER_INSTRUMENT_FAIL)

export const registerUser = (data: Object) => (dispatch: Function) => {
  dispatch(registerUserRequest())
  return axios
    .post(USER_REGISTER_ROUTE, data)
    .then(res =>
      dispatch(registerUserSuccess({
        username: res.data.username,
        authenticated: true,
      })))
    .then(() => dispatch(push('/lobby')))
    .catch(err => dispatch(registerUserFail(err)))
}

export const loginUser = (data: Object) => (dispatch: Function) => {
  dispatch(loginUserRequest())
  return axios
    .post(USER_LOGIN_ROUTE, data)
    .then(res =>
      dispatch(loginUserSuccess({
        username: res.data.username,
        authenticated: true,
      })))
    .then(() => dispatch(push('/lobby')))
    .catch(err => dispatch(loginUserFail(err)))
}

export const logoutUser = () => (dispatch: Function) => {
  dispatch(logoutUserRequest())
  return axios
    .post(USER_LOGOUT_ROUTE)
    .then(() => dispatch(logoutUserSuccess()))
    .catch(err => dispatch(logoutUserFail(err)))
}
