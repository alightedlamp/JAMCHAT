// @flow

import { connect } from 'react-redux'

import { createRoom } from '../actions/jamroom'

import ModalContainer from '../components/ModalContainer'

const mapDispatchToProps = dispatch => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(createRoom({
      title: e.target.title.value,
      bpm: e.target.bpm.value,
    }))
  },
})

export default connect(null, mapDispatchToProps)(ModalContainer)
