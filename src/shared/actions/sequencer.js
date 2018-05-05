// @flow

import { createAction } from 'redux-actions'

import * as types from '../constants/actionTypes'

export const editSequence = createAction(types.EDIT_SEQUENCE)
export const clearSequence = createAction(types.CLEAR_SEQUENCE)
export const resetSequence = createAction(types.RESET_SEQUENCE)

export const translateMessageToSequence = createAction(types.TRANSLATE_MESSAGE_TO_SEQUENCE)
export const startSequencers = createAction(types.START_SEQUENCERS)
export const stopSequencers = createAction(types.STOP_SEQUENCERS)

export const saveSequenceRequest = createAction(types.SAVE_SEQUENCE_REQUEST)
export const saveSequenceSuccess = createAction(types.SAVE_SEQUENCE_SUCCESS)
export const saveSequenceFail = createAction(types.SAVE_SEQUENCE_FAIL)
