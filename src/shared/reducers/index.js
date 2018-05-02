import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userReducer from './user'
import messageReducer from './message'
import lobbyReducer from './lobby'
import jamRoomReducer from './jamroom'
import instrumentReducer from './instrument'
import sequencerReducer from './sequencer'
import visitorChannelsReducer from './visitorChannels'
import currentSequencesReducer from './currentSequences'
import arrangementReducer from './arrangement'
import modalReducer from './modal'

export default combineReducers({
  user: userReducer,
  lobby: lobbyReducer,
  currentRoom: combineReducers({
    room: jamRoomReducer,
    message: messageReducer,
    channels: combineReducers({
      user: combineReducers({
        instrument: instrumentReducer,
        sequencer: sequencerReducer,
      }),
      visitors: visitorChannelsReducer,
    }),
    currentSequence: currentSequencesReducer,
  }),
  arrangement: arrangementReducer,
  modal: modalReducer,
  router: routerReducer,
})
