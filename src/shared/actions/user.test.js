import axios from 'axios'
import moxios from 'moxios'
import { spy } from 'sinon'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import { USER_REGISTER_ROUTE, USER_LOGIN_ROUTE, USER_LOGOUT_ROUTE } from '../routes'
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
  payload: { args: [`/${route}`], method: 'push' },
  type: '@@router/CALL_HISTORY_METHOD',
})

describe('user async actions', () => {
  beforeEach(() => moxios.install())
  afterEach(() => moxios.uninstall())

  const testUserObj = {
    username: 'HappyPainting4Lyfe',
  }

  test('registerUser success', () => {
    moxios.stubRequest(USER_REGISTER_ROUTE, {
      status: 200,
      response: { data: testUserObj },
    })

    axios.post(USER_REGISTER_ROUTE, testUserObj).then(spy())

    moxios.wait(() => {
      const store = mockStore()
      return store.dispatch(registerUser(testUserObj)).then(() => {
        expect(store.getActions()).toEqual([
          registerUserRequest(),
          registerUserSuccess({ username: testUserObj.username, authenticated: true }),
          mockReduxRouterAction('lobby'),
        ])
      })
    })
  })
})
