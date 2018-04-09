import axios from 'axios'
import moxios from 'moxios'
import { spy } from 'sinon'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import {
  USER_REGISTER_ROUTE,
  USER_LOGIN_ROUTE,
  USER_LOGOUT_ROUTE,
} from '../routes'

import {
  registerUser,
  registerUserRequest,
  registerUserSuccess,
  registerUserFail,
  loginUser,
  loginUserRequest,
  loginUserSuccess,
  loginUserFail,
  logoutUser,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserFail,
} from './user'

const mockStore = configureMockStore([thunkMiddleware])

const mockReduxRouterAction = route => ({
  payload: { args: [`${route}`], method: 'push' },
  type: '@@router/CALL_HISTORY_METHOD',
})

describe('user async actions', () => {
  beforeEach(() => moxios.install())
  afterEach(() => moxios.uninstall())

  test('registerUser success', () => {
    moxios.withMock(() => {
      axios.post(USER_REGISTER_ROUTE).then(spy())

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request
          .respondWith({
            status: 200,
            response: {
              id: 12345,
              username: 'happylittletrees',
              name: 'Bob Ross',
            },
          })
          .then(() => {
            const store = mockStore()
            return store.dispatch(registerUser()).then(() => {
              expect(store.getActions()).toEqual([
                registerUserRequest(),
                registerUserSuccess({
                  authenticated: true,
                  username: 'Bob Ross',
                }),
                mockReduxRouterAction('/lobby'),
              ])
            })
            // eslint-disable-next-line
            done()
          })
      })
    })
  })

  test('registerUser fail', () => {
    moxios.withMock(() => {
      axios.post(USER_REGISTER_ROUTE).then(spy())

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request
          .respondWith({
            status: 500,
            response: {
              error: 'Error!',
            },
          })
          .then(() => {
            const store = mockStore()
            return store.dispatch(registerUser()).then(() => {
              expect(store.getActions()).toEqual([
                registerUserRequest(),
                registerUserFail({ authenticated: false, error: 'Error' }),
              ])
            })
            // eslint-disable-next-line
            done()
          })
      })
    })
  })

  test('loginUser success', () => {
    moxios.withMock(() => {
      axios.post(USER_LOGIN_ROUTE).then(spy())

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request
          .respondWith({
            status: 200,
            response: {
              data: { username: 'Bob Ross' },
            },
          })
          .then(() => {
            const store = mockStore()
            return store.dispatch(loginUser()).then(() => {
              expect(store.getActions()).toEqual([
                loginUserRequest(),
                loginUserSuccess({ authenticated: true, username: 'Bob Ross' }),
                mockReduxRouterAction('/lobby'),
              ])
            })
            // eslint-disable-next-line
            done()
          })
      })
    })
  })

  test('loginUser fail', () => {
    moxios.withMock(() => {
      axios.post(USER_LOGIN_ROUTE).then(spy())

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request
          .respondWith({
            status: 500,
            response: {
              error: 'Error!',
            },
          })
          .then(() => {
            const store = mockStore()
            return store.dispatch(loginUser()).then(() => {
              expect(store.getActions()).toEqual([
                loginUserRequest(),
                loginUserFail({ authenticated: false, error: 'Error' }),
              ])
            })
            // eslint-disable-next-line
            done()
          })
      })
    })
  })

  test('logoutUser success', () => {
    moxios.withMock(() => {
      axios.post(USER_LOGOUT_ROUTE).then(spy())

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request
          .respondWith({
            status: 200,
          })
          .then(() => {
            const store = mockStore()
            return store.dispatch(logoutUser()).then(() => {
              expect(store.getActions()).toEqual([
                logoutUserRequest(),
                logoutUserSuccess(),
                mockReduxRouterAction('/'),
              ])
            })
            // eslint-disable-next-line
            done()
          })
      })
    })
  })

  test('loginUser fail', () => {
    moxios.withMock(() => {
      axios.post(USER_LOGIN_ROUTE).then(spy())

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request
          .respondWith({
            status: 500,
            response: {
              error: 'Error!',
            },
          })
          .then(() => {
            const store = mockStore()
            return store.dispatch(logoutUser()).then(() => {
              expect(store.getActions()).toEqual([
                logoutUserRequest(),
                logoutUserFail(),
              ])
            })
            // eslint-disable-next-line
            done()
          })
      })
    })
  })
})
