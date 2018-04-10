// @flow

import { connect } from 'react-redux'

import { postMessage } from '../actions/message'

import ChatForm from '../components/ChatForm'

const mapDispatchToProps = dispatch => ({
  handleClick: (e) => {
    e.preventDefault()
    dispatch(postMessage({
      message: e.target.message,
      user: 'FIX ME',
    }))
  },
})

export default connect(mapDispatchToProps)(ChatForm)
