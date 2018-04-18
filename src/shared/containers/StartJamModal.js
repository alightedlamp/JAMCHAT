// @flow

import { connect } from 'react-redux'

import { createRoom } from '../actions/jamroom'
import toggleModal from '../actions/modal'

import StartJamModal from '../components/StartJamModal'

const mapStateToProps = state => ({
  modalIsOpen: state.modal.modalIsOpen,
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(toggleModal()),
  handleSubmit: async (e) => {
    e.preventDefault()
    await dispatch(createRoom({
      title: e.target.title.value,
      bpm: e.target.bpm.value,
    }))
    dispatch(toggleModal())
  },
  closeModal: () => dispatch(toggleModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(StartJamModal)
