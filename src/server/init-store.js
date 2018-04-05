// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import userReducer from '../shared/reducers/user'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.user) {
    // flow-disable-next-line
    preloadedState.user = userReducer(undefined, {}).merge(Immutable.fromJS(plainPartialState.user))
  }

  return createStore(
    combineReducers({ user: userReducer }),
    preloadedState,
    applyMiddleware(thunkMiddleware),
  )
}

export default initStore
