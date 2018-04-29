// @flow

import { flatten } from 'lodash'
import * as toneUtil from '../utils/tone-util'

import {
  COMPILE_ARRANGEMENT,
  START_ARRANGEMENT,
  STOP_ARRANGEMENT,
  ADD_TONE_INSTRUMENT_TO_ARRANGEMENT,
  GET_ARRANGEMENT_REQUEST,
  GET_ARRANGEMENT_SUCCESS,
  GET_ARRANGEMENT_FAIL,
  ADD_SEQUENCE_TO_ARRANGEMENT_REQUEST,
  ADD_SEQUENCE_TO_ARRANGEMENT_SUCCESS,
  ADD_SEQUENCE_TO_ARRANGEMENT_FAIL,
} from '../constants/actionTypes'

const compileTrackJson = payload =>
  flatten(payload.userChannel, payload.visitorChannels)

const compileToneObjects = json =>
  json.map((track) => {
    const toneInstrument = new toneUtil.Instrument(track.instrument.settings)
    return {
      instrument: toneInstrument,
      sequences: track.sequences.map(sequence => new toneUtil.Sequencer(sequence, toneInstrument)),
    }
  })

const arrangementReducer = (
  state: Object = {
    trackJSON: [],
    trackToneObjects: [],
    playing: false,
  },
  action: { type: string, payload: Object },
) => {
  switch (action.type) {
    case COMPILE_ARRANGEMENT: {
      const trackJSON = compileTrackJson(action.payload)
      const trackToneObjects = compileToneObjects(trackJSON)
      return { ...state, trackJSON, trackToneObjects }
    }
    case START_ARRANGEMENT:
      return { ...state, playing: true }
    case STOP_ARRANGEMENT:
      return { ...state, playing: false }
    case ADD_TONE_INSTRUMENT_TO_ARRANGEMENT:
      return state
    case GET_ARRANGEMENT_REQUEST:
      return state
    case GET_ARRANGEMENT_SUCCESS:
      return state
    case GET_ARRANGEMENT_FAIL:
      return state
    case ADD_SEQUENCE_TO_ARRANGEMENT_REQUEST:
      return state
    case ADD_SEQUENCE_TO_ARRANGEMENT_SUCCESS:
      return state
    case ADD_SEQUENCE_TO_ARRANGEMENT_FAIL:
      return state
    default:
      return state
  }
}

export default arrangementReducer
