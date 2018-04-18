import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userReducer from './user'
import messageReducer from './message'
import lobbyReducer from './lobby'
import jamRoomReducer from './jamroom'
import instrumentReducer from './instrument'
import sequencerReducer from './sequencer'
import visitorChannelsReducer from './visitorChannels'
import modalReducer from './modal'

/*
  Do we actually need all sessions persisting in state,
  or can we just load up sessions on page mount?

  Should channels be an independent tree in state, or should
  each instrument be a component of currentRoom.room.users?
*/
export default combineReducers({
  user: userReducer,
  lobby: lobbyReducer,
  currentRoom: combineReducers({
    room: jamRoomReducer,
    message: messageReducer,
    userChannel: combineReducers({
      instrument: instrumentReducer,
      sequencer: sequencerReducer,
    }),
    vistorChannels: visitorChannelsReducer,
    // arrangement: arrangementReducer,
  }),
  modal: modalReducer,
  router: routerReducer,
})
