// @flow

import { connect } from 'react-redux'

import ChatPanel from '../components/ChatPanel'

const mapStateToProps = state => ({
  users: state.currentRoom.room.users,
})

export default connect(mapStateToProps)(ChatPanel)
