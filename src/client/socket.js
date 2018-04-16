// @flow

import socketIOClient from 'socket.io-client'

import * as types from '../shared/constants/messageTypes'

const socket = socketIOClient(window.location.host)

export const initSocket = (store) => {
  Object.keys(types).forEach((type) => {
    socket.on(type, (payload) => {
      store.dispatch({ type, payload })
    })
  })
}

export const emit = (type, payload) => socket.emit(type, payload)
