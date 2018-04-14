import axios from 'axios'
import moxios from 'moxios'
import { spy } from 'sinon'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import { IO_CLIENT_SEND_MESSAGE } from '../constants/messageTypes'
import { POST_MESSAGE_ROUTE, GET_MESSAGES_ROUTE } from '../routes'

import {
  postMessage,
  postMessageRequest,
  postMessageSuccess,
  postMessageFail,
  getMessages,
  getMessagesRequest,
  getMessagesSuccess,
  getMessagesFail,
} from './message'

const mockStore = configureMockStore([thunkMiddleware])

const mockReduxRouterAction = route => ({
  payload: { args: [`${route}`], method: 'push' },
  type: '@@router/CALL_HISTORY_METHOD',
})

describe('message async actions', () => {
  beforeEach(() => moxios.install())
  afterEach(() => moxios.uninstall())

  test('postMessage success', () => {
    moxios.withMock(() => {
      axios.post(POST_MESSAGE_ROUTE).then(spy())

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request
          .respondWith({
            status: 200,
            response: {
              user: 'happylittletrees',
              content:
                'I just love to paint across the stack, happy little MVC',
              room: 'Painting with Bob Ross',
            },
          })
          .then(() => {
            const store = mockStore()
            return store.dispatch(postMessage()).then(() => {
              expect(store.getActions()).toEqual([
                postMessageRequest(),
                postMessageSuccess({
                  posting: false,
                  user: 'happylittletree',
                  content:
                    'I just love to paint across the stack, happy little MVC',
                }),
              ])
            })
            // eslint-disable-next-line
            done()
          })
      })
    })
  })

  test('postMessage fail', () => {
    moxios.withMock(() => {
      axios.post(POST_MESSAGE_ROUTE).then(spy())

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request
          .respondWith({
            status: 500,
            response: {
              user: 'happylittletrees',
              content:
                'I just love to paint across the stack, happy little MVC',
              room: 'Painting with Bob Ross',
            },
          })
          .then(() => {
            const store = mockStore()
            return store.dispatch(postMessage()).then(() => {
              expect(store.getActions()).toEqual([
                postMessageRequest(),
                postMessageFail({
                  error: 'Error!',
                }),
              ])
            })
            // eslint-disable-next-line
            done()
          })
      })
    })
  })
})
