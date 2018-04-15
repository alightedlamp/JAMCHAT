import { connect } from 'react-redux'

import { joinRoom, leaveRoom } from '../actions/jamroom'
import { getMessages } from '../actions/message'

import Jam from '../components/pages/Jam'

const mapStateToProps = (state, ownProps) => ({
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
  onUnmount: (username, roomId) =>
    dispatch(leaveRoom({ username, room_id: roomId })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Jam)
