import { connect } from 'react-redux'

import { joinRoom, leaveRoom } from '../actions/jamroom'
import { resetSequence } from '../actions/sequencer'
import { getMessages } from '../actions/message'

import Jam from '../components/pages/Jam'

const mapStateToProps = (state, ownProps) => ({
  title: state.currentRoom.room.title,
  createdBy: state.currentRoom.room.createdBy,
  roomId: ownProps.match.params.id,
  user: {
    username: state.user.username,
    id: state.user.id,
  },
})

const mapDispatchToProps = dispatch => ({
  onMount: async (username, userId, roomId) => {
    await dispatch(joinRoom({ username, userId, room_id: roomId }))
    await dispatch(getMessages(roomId))
  },
  onUnmount: async (username, roomId) => {
    await dispatch(leaveRoom({ username, room_id: roomId }))
    await dispatch(resetSequence())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Jam)
