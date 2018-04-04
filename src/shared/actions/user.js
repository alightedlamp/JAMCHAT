// @flow

import axios from 'axios'
import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

import { USER_REGISTER_ROUTE, USER_LOGIN_ROUTE, USER_LOGOUT_ROUTE } from '../routes'

export const validateUsername = createAction(types.VALIDATE_USERNAME)
export const validatePassword = createAction(types.VALIDATE_PASSWORD)

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
    .then(user => dispatch(registerUserSuccess))
    .catch(err => dispatch(registerUserFail))
}

export const loginUser = (data: Object) => (dispatch: Function) => {
  dispatch(loginUserRequest())
  return axios
    .post(USER_LOGIN_ROUTE, data)
    .then(user => dispatch(loginUserSuccess))
    .catch(err => dispatch(loginUserFail))
}

export const logoutUser = (data: Object) => (dispatch: Function) => {
  dispatch(logoutUserRequest())
  return axios
    .post(USER_LOGOUT_ROUTE, data)
    .then(user => dispatch(logoutUserSuccess))
    .catch(err => dispatch(logoutUserFail))
}
