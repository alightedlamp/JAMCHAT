// @flow

import {
  IO_SERVER_CHOOSE_INSTRUMENT,
  IO_SERVER_EDIT_SEQUENCE,
  IO_SERVER_CLEAR_SEQUENCE,
  IO_SERVER_SAVE_SEQUENCE,
  IO_SERVER_ADJUST_MIXER,
  IO_SERVER_ADJUST_CUTOFF,
  IO_SERVER_ADJUST_RESONANCE,
  IO_SERVER_MUTE_CHANNEL,
  IO_SERVER_TOGGLE_PLAYBACK,
} from '../constants/messageTypes'

const visitorChannelsReducer = (
  state: Object = {},
  action: { type: string, payload: Object },
) => {
  switch (action.type) {
    case IO_SERVER_CHOOSE_INSTRUMENT:
      return state
    case IO_SERVER_EDIT_SEQUENCE:
      return state
    case IO_SERVER_CLEAR_SEQUENCE:
      return state
    case IO_SERVER_SAVE_SEQUENCE:
      return state
    case IO_SERVER_ADJUST_MIXER:
      return state
    case IO_SERVER_ADJUST_CUTOFF:
      return state
    case IO_SERVER_ADJUST_RESONANCE:
      return state
    case IO_SERVER_MUTE_CHANNEL:
      return state
    case IO_SERVER_TOGGLE_PLAYBACK:
      return state
    default:
      return state
  }
}

export default visitorChannelsReducer
