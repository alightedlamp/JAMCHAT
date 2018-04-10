// @flow

import axios from 'axios'
import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

import { POST_MESSAGE_ROUTE } from '../routes'

export const postMessageRequest = createAction(types.POST_MESSAGE_REQUEST)
export const postMessageSuccess = createAction(types.POST_MESSAGE_SUCCESS)
export const postMessageFail = createAction(types.POST_MESSAGE_FAIL)

export const receiveMessage = createAction(types.RECEIVE_MESSAGE)

export const postMessage = (data: Object) => (dispatch: Function) => {
  dispatch(postMessageRequest)
  axios
    .post(POST_MESSAGE_ROUTE, data)
    .then(res => dispatch(postMessageSuccess(res)))
    .catch(err => dispatch(postMessageFail(err)))
}
