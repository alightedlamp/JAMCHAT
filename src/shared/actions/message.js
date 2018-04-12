// @flow

import axios from 'axios'
import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

import { IO_CLIENT_SEND_MESSAGE } from '../constants/messageTypes'
import { POST_MESSAGE_ROUTE, GET_MESSAGES_ROUTE } from '../routes'

export const postMessageRequest = createAction(types.POST_MESSAGE_REQUEST)
export const postMessageSuccess = createAction(types.POST_MESSAGE_SUCCESS)
export const postMessageFail = createAction(types.POST_MESSAGE_FAIL)

export const postMessage = (data: Object) => (
  dispatch: Function,
  getState,
  { emit },
) => {
  dispatch(postMessageRequest)
  return axios
    .post(POST_MESSAGE_ROUTE, data)
    .then(res => dispatch(postMessageSuccess(res)))
    .then(payload =>
      emit(IO_CLIENT_SEND_MESSAGE, {
        user: payload.data.user,
        content: payload.data.content,
        room: payload.data.room,
      }))
    .catch(err => dispatch(postMessageFail(err)))
}

export const getMessagesRequest = createAction(types.GET_MESSAGES_REQUEST)
export const getMessagesSuccess = createAction(types.GET_MESSAGES_SUCCESS)
export const getMessagesFail = createAction(types.GET_MESSAGES_FAIL)

export const getMessages = () => (dispatch: Function) => {
  dispatch(getMessagesRequest)
  axios.get(GET_MESSAGES_ROUTE).then(res =>
    dispatch(getMessagesSuccess({
      messages: res.messages,
    })))
}
