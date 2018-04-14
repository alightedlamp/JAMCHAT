// @flow

import { connect } from 'react-redux'

import { getMessages, resetMessages } from '../actions/message'

import Chat from '../components/Chat'

const mapStateToProps = state => ({
  room: state.currentRoom.room.id,
  messages: state.currentRoom.message.messages,
})

const mapDispatchToProps = dispatch => ({
  onMount: id => dispatch(getMessages(id)),
  onUnmount: () => dispatch(resetMessages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
