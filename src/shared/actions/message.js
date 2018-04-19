// @flow

import axios from 'axios'
import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

import {
  IO_CLIENT_SEND_MESSAGE,
  IO_SERVER_SEND_MESSAGE,
} from '../constants/messageTypes'
import { POST_MESSAGE_ROUTE, getMessagesRoute } from '../routes'

export const postMessageRequest = createAction(types.POST_MESSAGE_REQUEST)
export const postMessageSuccess = createAction(types.POST_MESSAGE_SUCCESS)
export const postMessageFail = createAction(types.POST_MESSAGE_FAIL)

export const postMessage = (data: Object) => (
  dispatch: Function,
  getState,
  { emit },
) => {
  dispatch(postMessageRequest())
  axios
    .post(POST_MESSAGE_ROUTE, data)
    .then((res) => {
      const message = {
        user: res.data.user,
        content: res.data.content,
        created_at: res.data.created_at,
      }
      dispatch(postMessageSuccess(message))
      // eslint-disable-next-line
      emit(IO_CLIENT_SEND_MESSAGE, { ...message, room_id: res.data.room._id })
    })
    .catch(err => dispatch(postMessageFail(err)))
}

export const getMessagesRequest = createAction(types.GET_MESSAGES_REQUEST)
export const getMessagesSuccess = createAction(types.GET_MESSAGES_SUCCESS)
export const getMessagesFail = createAction(types.GET_MESSAGES_FAIL)

export const getMessages = (id: string) => (dispatch: Function) => {
  dispatch(getMessagesRequest)
  axios
    .get(getMessagesRoute(id))
    .then(res =>
      dispatch(getMessagesSuccess({
        messages: res.data,
      })))
    .catch(err => dispatch(getMessagesFail(err)))
}

export const receiveMessage = createAction(IO_SERVER_SEND_MESSAGE)
export const resetMessages = createAction(types.RESET_MESSAGES)
