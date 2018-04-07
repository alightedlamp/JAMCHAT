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
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} from '../constants/actionTypes'

const initialState = Immutable.fromJS({ authenticated: false })

const userReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { ...state, fetching: true }
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        fetching: false,
        authenticated: true,
        username: action.payload.username,
      }
    case REGISTER_USER_FAIL:
      return { ...state, error: { ...action.payload } }
    case LOGIN_USER_REQUEST:
      return { ...state, fetching: true }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        featching: false,
        authenticated: true,
        username: action.payload.username,
      }
    case LOGIN_USER_FAIL:
      return { ...state, error: { ...action.payload } }
    case LOGOUT_USER_REQUEST:
      return { ...state, fetching: true }
    case LOGOUT_USER_SUCCESS:
      return { ...state, authenticated: false }
    case LOGOUT_USER_FAIL:
      return { ...state, error: { ...action.payload } }
    default:
      return state
  }
}

export default userReducer
