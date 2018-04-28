import { connect } from 'react-redux'

import JamPanel from '../components/JamPanel'

const mapStateToProps = state => ({
  title: state.currentRoom.room.title,
  createdBy: state.currentRoom.room.created_by,
  bpm: state.currentRoom.room.bpm,
  userChannel: state.currentRoom.userChannel,
  visitorChannels: state.currentRoom.visitorChannels,
})

export default connect(mapStateToProps)(JamPanel)
