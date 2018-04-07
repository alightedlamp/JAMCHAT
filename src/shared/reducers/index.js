import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userReducer from './user'
import messageReducer from './message'

export default combineReducers({
  user: userReducer,
  message: messageReducer,
  router: routerReducer,
})
