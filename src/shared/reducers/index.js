import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userReducer from './user'
import messageReducer from './message'
import lobbyReducer from './lobby'
import jamRoomReducer from './jamroom'

export default combineReducers({
  user: userReducer,
  rooms: lobbyReducer,
  currentRoom: combineReducers({
    room: jamRoomReducer,
    messages: messageReducer,
  }),
  router: routerReducer,
})
