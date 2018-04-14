// @flow

import {
  POST_MESSAGE_REQUEST,
  POST_MESSAGE_SUCCESS,
  POST_MESSAGE_FAIL,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  RESET_MESSAGES,
} from '../constants/actionTypes'

import { IO_SERVER_SEND_MESSAGE } from '../constants/messageTypes'

const initialState = { posting: false, fetching: false, messages: [] }

const addNewMessageToState = (state, payload) => ({
  ...state,
  posting: false,
  messages: [
    ...state.messages,
    {
      user: payload.user.username,
      content: payload.content,
      created_at: payload.created_at,
    },
  ],
})

const messageReducer = (
  state = initialState,
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    case POST_MESSAGE_REQUEST:
      return { ...state, posting: true }
    case POST_MESSAGE_SUCCESS:
      return addNewMessageToState(state, action.payload)
    case POST_MESSAGE_FAIL:
      return { ...state, posting: false, error: { ...action.payload } }
    case IO_SERVER_SEND_MESSAGE:
      console.log('adding message from server:')
      console.log(action.payload)
      return addNewMessageToState(state, action.payload)
    case GET_MESSAGES_REQUEST:
      return { ...state, fetching: true }
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload.messages.map(message => ({
          user: message.user.username,
          content: message.content,
          created_at: message.created_at,
        })),
      }
    case GET_MESSAGES_FAIL:
      return { ...state, fetching: false, error: { ...action.payload } }
    case RESET_MESSAGES:
      return {
        ...state,
        messages: [],
      }
    default:
      return state
  }
}

export default messageReducer
