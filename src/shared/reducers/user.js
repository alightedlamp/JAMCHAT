// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from '../constants/actionTypes'

const initialState = Immutable.fromJS({ user: { authenticated: false } })

const userRegister = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { ...state, isAuthenticating: true }
    case REGISTER_USER_SUCCESS:
      return { ...state, ...action.payload }
    case REGISTER_USER_FAIL:
      return { ...state, errorAuthenticating: { ...action.payload } }
    case LOGIN_USER_REQUEST:
      return { ...state, isAuthenticating: true }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...action.payload }
    case LOGIN_USER_FAIL:
      return { ...state, errorAuthenticating: { ...action.payload } }
    default:
      return state
  }
}

export default userRegister
