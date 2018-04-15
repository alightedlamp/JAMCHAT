import { connect } from 'react-redux'

import JamPanel from '../components/JamPanel'

const mapStateToProps = state => ({
  title: state.currentRoom.room.title,
  created_by: state.currentRoom.room.created_by,
  bpm: state.currentRoom.room.bpm,
})

export default connect(mapStateToProps)(JamPanel)
