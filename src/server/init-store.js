// @flow

import Immutable from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../shared/reducers'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  // if (plainPartialState && plainPartialState.user) {
  //   // flow-disable-next-line
  //   preloadedState.user = userReducer(undefined, {}).merge(Immutable.fromJS(plainPartialState.user))
  // }

  return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
