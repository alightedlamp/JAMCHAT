import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userReducer from './user'
import messageReducer from './message'
import jamRoomReducer from './jamroom'

export default combineReducers({
  user: userReducer,
  jamroom: jamRoomReducer,
  message: messageReducer,
  router: routerReducer,
})
