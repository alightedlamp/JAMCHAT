// @flow

import * as types from '../shared/constants/messageTypes'

import { leaveRoom } from './controller'

/* eslint-disable no-console */
// const setUpSocket = (io: Object) => {
//   io.on(types.IO_CONNECT, (socket) => {
//     socket.on(types.IO_CLIENT_CHOOSE_INSTRUMENT, (room, payload) => {
//       console.log('[socket.io] client: chose an instrument')
//       io.to(room).emit(types.IO_SERVER_CHOOSE_INSTRUMENT, payload)
//     })
//     socket.on(types.IO_CLIENT_EDIT_SEQUENCE, (room, payload) => {
//       console.log('[socket.io] client: adjusted mixer')
//       io.to(room).emit(types.IO_SERVER_ADJUST_MIXER, payload)
//     })
//     socket.on(types.IO_CLIENT_ADJUST_CUTOFF, (room, payload) => {
//       console.log('[socket.io] client: adjusted cutoff')
//       io.to(room).emit(types.IO_SERVER_ADJUST_CUTOFF, payload)
//     })
//     socket.on(types.IO_CLIENT_ADJUST_RESONANCE, (room, payload) => {
//       console.log('[socket.io] client: adjusted resonance')
//       io.to(room).emit(types.IO_SERVER_ADJUST_RESONANCE, payload)
//     })
//     socket.on(types.IO_CLIENT_MUTE_CHANNEL, (room, payload) => {
//       console.log('[socket.io] client: muted channel')
//       io.to(room).emit(types.IO_SERVER_MUTE_CHANNEL, payload)
//     })
//     socket.on(types.IO_CLIENT_TOGGLE_PLAYBACK, (room, payload) => {
//       console.log('[socket.io] client: toggled playback')
//       io.to(room).emit(types.IO_SERVER_TOGGLE_PLAYBACK, payload)
//     })
//   })
// }

const clientSendMessage = ({ io, socket, data }) => {
  console.log(`[socket.io] client: ${data.content} by ${data.user.username}`)
  socket.broadcast.to(data.room_id).emit(types.IO_SERVER_SEND_MESSAGE, data)
}

const clientJoinRoom = ({ io, socket, data }) => {
  console.log(`[socket.io] a client joined room: ${data.room_id}`)
  socket.join(data.room_id).emit(types.IO_SERVER_JOIN_ROOM, data)
}

const clientDisconnect = async ({ io, socket, data }) => {
  console.log('[socket.io] a client disconnected:')
  console.log(data)
  // Disconnect happened on user leaving room
  if (data) {
    socket.leave(data.room_id)
    socket.broadcast
      .to(data.room_id)
      .emit(types.IO_SERVER_LEAVE_ROOM, { user_id: data.user_id })
  }
  // Disconnect happened on user closing browser or refreshing
}
/* eslint-enable no-console */

const addListenersToSocket = ({ io, socket }) => {
  socket.on(types.IO_CLIENT_JOIN_ROOM, data =>
    clientJoinRoom({ io, socket, data }))
  socket.on(types.IO_CLIENT_SEND_MESSAGE, data =>
    clientSendMessage({ io, socket, data }))
  socket.on(types.IO_CLIENT_LEAVE_ROOM, data =>
    clientDisconnect({ io, socket, data }))
  socket.on(types.IO_DISCONNECT, () => clientDisconnect({ io, socket }))
}

const initSocket = io =>
  io.on(types.IO_CONNECT, socket => addListenersToSocket({ io, socket }))

export default initSocket
