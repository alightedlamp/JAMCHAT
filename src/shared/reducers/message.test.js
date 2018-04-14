import Immutable from 'immutable'
import messageReducer from './message'

import {
  POST_MESSAGE_REQUEST,
  POST_MESSAGE_SUCCESS,
  POST_MESSAGE_FAIL,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  IO_SERVER_SEND_MESSAGE,
} from '../constants/actionTypes'

describe('message reducer', () => {
  test('handles initial state', () => {
    expect(messageReducer(undefined, {})).toEqual({
      posting: false,
      messages: [],
    })
  })

  test('handles post message request', () => {
    const actionBefore = {
      posting: false,
      messages: [],
    }
    const actionAfter = {
      type: POST_MESSAGE_REQUEST,
    }
    const result = {
      posting: true,
      messages: [],
    }
    expect(messageReducer(actionBefore, actionAfter)).toEqual(result)
  })

  test('handles post message success', () => {
    const actionBefore = {
      posting: true,
      messages: [],
    }
    const actionAfter = {
      type: POST_MESSAGE_SUCCESS,
      payload: {
        posting: false,
        user: 'Bob Ross',
        content: 'A lil message for you',
        created_at: '2018-04-12',
      },
    }
    const result = {
      posting: false,
      messages: [
        {
          user: 'Bob Ross',
          content: 'A lil message for you',
          created_at: '2018-04-12',
        },
      ],
    }
    expect(messageReducer(actionBefore, actionAfter)).toEqual(result)
  })

  test('handles receiveing server message', () => {
    const actionBefore = {
      posting: false,
      messages: [
        {
          user: 'Bart Simpson',
          content: 'Get bent!',
        },
      ],
    }
    const actionAfter = {
      type: IO_SERVER_SEND_MESSAGE,
      payload: {
        posting: false,
        user: 'Bob Ross',
        content: 'A lil message for you',
        created_at: '2018-04-12',
      },
    }
    const result = {
      posting: false,
      messages: [
        {
          user: 'Bart Simpson',
          content: 'Get bent!',
        },
        {
          user: 'Bob Ross',
          content: 'A lil message for you',
          created_at: '2018-04-12',
        },
      ],
    }
    expect(messageReducer(actionBefore, actionAfter)).toEqual(result)
  })
})
