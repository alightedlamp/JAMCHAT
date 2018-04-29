import { createAction } from 'redux-actions'
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

export const compileArrangement = createAction(COMPILE_ARRANGEMENT)

export const startArrangement = createAction(START_ARRANGEMENT)
export const stopArrangement = createAction(STOP_ARRANGEMENT)

export const addToneInstrumentToArrangement = createAction(ADD_TONE_INSTRUMENT_TO_ARRANGEMENT)

export const getArrangementRequest = createAction(GET_ARRANGEMENT_REQUEST)
export const getArrangementSuccess = createAction(GET_ARRANGEMENT_SUCCESS)
export const getArrangementFail = createAction(GET_ARRANGEMENT_FAIL)

export const getArrangement = () => {}

export const addSequenceToArrangementRequest = createAction(ADD_SEQUENCE_TO_ARRANGEMENT_REQUEST)
export const addSequenceToArrangementSuccess = createAction(ADD_SEQUENCE_TO_ARRANGEMENT_SUCCESS)
export const addSequenceToArrangementFail = createAction(ADD_SEQUENCE_TO_ARRANGEMENT_FAIL)

export const addSequenceToArrangement = () => {}
