// @llow

import { createAction } from 'redux-actions'

import * as types from '../constants/actionTypes'

export const createInstrumentRequest = createAction(types.CREATE_INSTRUMENT_REQUEST)
export const createInstrumentSuccess = createAction(types.CREATE_INSTRUMENT_SUCCESS)
export const createInstrumentFail = createAction(types.CREATE_INSTRUMENT_FAIL)

export const adjustUserVolume = createAction(types.ADJUST_USER_VOLUME)
export const adjustUserCutoff = createAction(types.ADJUST_USER_CUTOFF)
export const adjustUserResonance = createAction(types.ADJUST_USER_RESONANCE)
export const adjustUserOctave = createAction(types.ADJUST_USER_OCTAVE)

export const toggleInstrumentMute = createAction(types.TOGGLE_INSTRUMENT_MUTE)
export const toggleInstrumentPlaying = createAction(types.TOGGLE_INSTRUMENT_PLAYING)
