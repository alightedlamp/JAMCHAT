import { createAction } from 'redux'
import * as types from '../constants/actionTypes'

export const validateUsername = createAction(types.VALIDATE_USERNAME)
export const validatePassword = createAction(types.VALIDATE_PASSWORD)
export const registerNewUser = createAction(types.REGISTER_NEW_USER)
export const loginUser = createAction(types.LOGIN_USER)
export const logoutUser = createAction(types.LOGOUT_USER)
export const chooseInstrument = createAction(types.CHOOSE_INSTRUMENT)
export const switchInstrument = createAction(types.SWITCH_INSTRUMENT)
