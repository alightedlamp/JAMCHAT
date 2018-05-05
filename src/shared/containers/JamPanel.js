import { connect } from 'react-redux'

import {
  compileArrangement,
  startArrangement,
  stopArrangement,
} from '../actions/arrangement'

import JamPanel from '../components/JamPanel'

const mapStateToProps = state => ({
  title: state.currentRoom.room.title,
  createdBy: state.currentRoom.room.created_by,
  bpm: state.currentRoom.room.bpm,
  userChannel: state.currentRoom.userChannel,
  visitorChannels: state.currentRoom.visitorChannels,
})

const mapDispatchToProps = dispatch => ({
  onMount: ({ instruments, sequences, bpm }) => {
    dispatch(compileArrangement({ instruments, sequences, bpm }))
    dispatch(startArrangement())
  },
  onUnmount: () => {
    dispatch(stopArrangement())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(JamPanel)
