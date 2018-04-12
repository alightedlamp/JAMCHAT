// @flow

import * as types from '../shared/constants/messageTypes'

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
  console.log(data)
  // console.log(`[socket.io] client: ${data.content} by ${data.user}`)
  io.to(io.room).emit(types.IO_SERVER_MESSAGE, data)
}

const clientJoinRoom = ({ io, socket, data }) => {
  console.log(`[socket.io] a client joined room: ${data.room}`)
  socket.join(data.room)
}

const clientDisconnect = ({ io, socket }) => {
  console.log('[socket.io] a client disconnected')
  io.to(socket.room).emit(types.IO_CLIENT_LEAVE_ROOM)
}
/* eslint-enable no-console */

const addListenersToSocket = ({ io, socket }) => {
  const { user } = socket
  if (user) {
    // handleReconnect({ socket, user })
  }

  socket.on(types.IO_CLIENT_JOIN_ROOM, data =>
    clientJoinRoom({ io, socket, data }))
  socket.on(types.IO_CLIENT_SEND_MESSAGE, data =>
    clientSendMessage({ io, socket, data }))
  socket.on(types.IO_DISCONNECT, () => clientDisconnect({ io, socket }))
}

const initSocket = io =>
  io.on(types.IO_CONNECT, socket => addListenersToSocket({ io, socket }))

export default initSocket
