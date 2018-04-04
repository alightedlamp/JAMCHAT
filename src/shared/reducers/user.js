// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from '../actions/user'

const initialState = Immutable.fromJS({ user: '' })

const userReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return state.set('isLoading', 'Loading...')
    case REGISTER_USER_SUCCESS:
      return state.set('user', action.payload)
    case REGISTER_USER_FAIL:
      return state.set('error', action.payload)
    default:
      return state
  }
}

export default userReducer
