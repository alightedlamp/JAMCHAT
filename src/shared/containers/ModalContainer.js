// @flow

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Modal from 'react-modal'

import { createRoom } from '../actions/jamroom'

const FormField = styled.div`
  margin: 1em auto;
`

class ModalContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
    }
  }

  afterOpenModal = () => {}

  openModal = () => this.setState({ modalIsOpen: true })
  closeModal = () => this.setState({ modalIsOpen: false })

  render() {
    return (
      <div>
        <button onClick={this.openModal}>{this.props.openModalText}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel={this.props.label}
        >
          {/* why are they doing this funcion ref? */}
          <h2 ref={subtitle => (this.subtitle = subtitle)}>{this.props.subtitle}</h2>{' '}
          <button onClick={this.closeModal}>close</button>
          <form onSubmit={this.props.handleSubmit}>
            <FormField>{this.props.children}</FormField>
            <button type="submit">Jam!</button>
          </form>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(createRoom({
      action: 'create',
      title: e.target.title.value,
      bpm: e.target.bpm.value,
    }))
  },
})

export default connect(null, mapDispatchToProps)(ModalContainer)
