import { connect } from 'react-redux'

import { startArrangement, stopArrangement } from '../actions/arrangement'
import * as toneUtil from '../utils/tone-util'

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
    const CurrentArrangement = new toneUtil.Arrangement(
      instruments,
      sequences,
      bpm,
    )
    dispatch(startArrangement(CurrentArrangement))
    CurrentArrangement.startTransport()
  },
  onUnmount: (arrangement) => {
    dispatch(stopArrangement())
    arrangement.stopTransport()
    arrangement.resetArrangement()
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(JamPanel)
