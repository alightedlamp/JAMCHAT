// @flow

import { connect } from 'react-redux'

import { postMessage } from '../actions/message'

import Form from '../components/Form'

const mapPropsToState = state => ({
  room: state.currentRoom.room.id,
  user: state.user.id,
})

const mapDispatchToProps = dispatch => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(postMessage({
      room: e.target.room.value,
      content: e.target.content.value,
    }))
    e.target.reset()
  },
})

export default connect(mapPropsToState, mapDispatchToProps)(Form)
