// @flow

import { connect } from 'react-redux'

import { getMessages } from '../actions/message'

import Chat from '../components/Chat'

const mapStateToProps = state => ({
  messages: state.currentRoom.messages,
})

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(getMessages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
