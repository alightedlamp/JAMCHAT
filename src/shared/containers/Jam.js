import { connect } from 'react-redux'

import { joinRoom, leaveRoom } from '../actions/jamroom'

import Jam from '../components/pages/Jam'

const mapStateToProps = (state, ownProps) => ({
  title: state.currentRoom.room.title,
  createdBy: state.currentRoom.room.created_by,
  users: state.currentRoom.room.users,
  roomId: ownProps.match.params.id,
  user: {
    username: state.user.username,
    id: state.user.id,
  },
})

const mapDispatchToProps = dispatch => ({
  onMount: (username, userId, roomId) =>
    dispatch(joinRoom({ username, userId, room_id: roomId })),
  onUnmount: (username, roomId) =>
    dispatch(leaveRoom({ username, room_id: roomId })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Jam)
