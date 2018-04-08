// @flow

import Immutable from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import userReducer from '../shared/reducers'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.user) {
    // flow-disable-next-line
    preloadedState.user = userReducer(undefined, {}).merge(Immutable.fromJS(plainPartialState.hello))
  }

  return createStore(userReducer, preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
