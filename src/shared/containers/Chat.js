// @flow

import { connect } from 'react-redux'

import { resetMessages } from '../actions/message'

import Chat from '../components/Chat'

const mapStateToProps = state => ({
  roomId: state.currentRoom.room.id,
  messages: state.currentRoom.message.messages,
})

const mapDispatchToProps = dispatch => ({
  onUnmount: () => dispatch(resetMessages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
