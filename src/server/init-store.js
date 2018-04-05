// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import history from '../shared/history'
import userReducer from '../shared/reducers/user'

const middlewareHistory = routerMiddleware(history)
const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.user) {
    // flow-disable-next-line
    preloadedState.user = userReducer(undefined, {}).merge(Immutable.fromJS(plainPartialState.user))
  }

  return createStore(
    combineReducers({ user: userReducer, router: routerReducer }),
    preloadedState,
    applyMiddleware(middlewareHistory, thunkMiddleware),
  )
}

export default initStore
