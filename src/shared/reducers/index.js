import { combineReducers } from 'redux'

import userReducer from './user'
import messageReducer from './message'

export default combineReducers({
  userReducer,
  messageReducer,
})
