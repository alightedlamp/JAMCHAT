// @flow

import {
  CREATE_INSTRUMENT_REQUEST,
  CREATE_INSTRUMENT_SUCCESS,
  CREATE_INSTRUMENT_FAIL,
  ADJUST_USER_VOLUME,
  ADJUST_USER_CUTOFF,
  ADJUST_USER_RESONANCE,
  ADJUST_USER_OCTAVE,
  TOGGLE_INSTRUMENT_MUTE,
  TOGGLE_INSTRUMENT_PLAYING,
} from '../constants/actionTypes'

const instrumentReducer = (
  state: Object = {
    type: '',
    settings: {},
    volume: 85,
    cutoff: 50,
    resonance: 50,
    octave: 4,
    muted: false,
    playing: false,
  },
  action: { type: string, payload: Object },
) => {
  switch (action.type) {
    case CREATE_INSTRUMENT_REQUEST:
      return state
    case CREATE_INSTRUMENT_SUCCESS:
      return state
    case CREATE_INSTRUMENT_FAIL:
      return state
    case ADJUST_USER_VOLUME:
      return { ...state, volume: action.payload }
    case ADJUST_USER_CUTOFF:
      return { ...state, cutoff: action.payload }
    case ADJUST_USER_RESONANCE:
      return { ...state, resonance: action.payload }
    case ADJUST_USER_OCTAVE:
      return { ...state, octave: action.payload }
    case TOGGLE_INSTRUMENT_MUTE:
      return { ...state, muted: !state.muted }
    case TOGGLE_INSTRUMENT_PLAYING:
      return { ...state, playing: !state.playing }
    default:
      return state
  }
}

export default instrumentReducer
