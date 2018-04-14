import Immutable from 'immutable'
import user from './user'

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} from '../constants/actionTypes'

describe('user reducer', () => {
  test('handles initial state', () => {
    expect(user(undefined, {})).toEqual(Immutable.fromJS({
      authenticated: false,
    }))
  })

  test('handles register user request', () => {
    expect(user(
      {},
      {
        type: REGISTER_USER_REQUEST,
      },
    )).toEqual({
      fetching: true,
    })
  })

  test('handles register user success', () => {
    expect(user(
      { fetching: true },
      {
        type: REGISTER_USER_SUCCESS,
        payload: { authenticated: true, fetching: false },
      },
    ))
  })

  test('handles register user fail', () => {
    expect(user({}, { type: REGISTER_USER_FAIL, payload: { error: 'Error' } }))
  })

  test('handles login user request', () => {
    expect(user(
      {},
      {
        type: LOGIN_USER_REQUEST,
      },
    )).toEqual({
      fetching: true,
    })
  })

  test('handles login user success', () => {
    expect(user(
      { fetching: true },
      { type: LOGIN_USER_SUCCESS, payload: { authenticated: true } },
    ))
  })

  test('handles login user fail', () => {
    expect(user({}, { type: LOGIN_USER_FAIL, payload: { error: 'Error' } }))
  })

  test('handles logout user request', () => {
    expect(user(
      {},
      {
        type: LOGOUT_USER_REQUEST,
      },
    )).toEqual({
      fetching: true,
    })
  })

  test('handles logout user success', () => {
    expect(user(
      { fetching: true },
      { type: LOGOUT_USER_SUCCESS, payload: { authenticated: false } },
    ))
  })

  test('handles logout user fail', () => {
    expect(user({}, { type: LOGOUT_USER_FAIL, payload: { error: 'Error' } }))
  })
})
