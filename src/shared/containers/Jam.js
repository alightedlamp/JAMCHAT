import { connect } from 'react-redux'

import { leaveRoom } from '../actions/jamroom'

import Jam from '../components/pages/Jam'

const mapStateToProps = state => ({
  title: state.currentRoom.room.title,
  createdBy: state.currentRoom.room.created_by,
  users: state.currentRoom.room.users,
  roomId: state.currentRoom.room.id,
  username: state.user.username,
})

const mapDispatchToProps = dispatch => ({
  onUnmount: (username, roomId) =>
    dispatch(leaveRoom({ username, room_id: roomId })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Jam)
