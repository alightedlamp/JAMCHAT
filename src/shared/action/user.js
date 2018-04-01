import { createAction } from 'redux'
import * as types from '../constants/actionTypes'

export const validateUsername = createAction(types.VALIDATE_USERNAME)
export const validatePassword = createAction(types.VALIDATE_PASSWORD)

export const registerNewUserRequest = createAction(types.REGISTER_NEW_USER_REQUEST)
export const registerNewUserSuccess = createAction(types.REGISTER_NEW_USER_SUCCESS)
export const registerNewUserFail = createAction(types.REGISTER_NEW_USER_FAIL)

export const loginNewUserRequest = createAction(types.LOGIN_NEW_USER_REQUEST)
export const loginNewUserSuccess = createAction(types.LOGIN_NEW_USER_SUCCESS)
export const loginNewUserFail = createAction(types.LOGIN_NEW_USER_FAIL)

export const chooseInstrument = createAction(types.CHOOSE_INSTRUMENT)
export const switchInstrument = createAction(types.SWITCH_INSTRUMENT)

export const registerNewUser;
export const loginUser;
export const logoutUser;
