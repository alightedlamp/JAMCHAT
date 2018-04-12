// @flow

import { connect } from 'react-redux'

import { postMessage } from '../actions/message'

import Form from '../components/Form'

const mapDispatchToProps = dispatch => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(postMessage({
      content: e.target.content.value,
    }))
  },
})

export default connect(null, mapDispatchToProps)(Form)
