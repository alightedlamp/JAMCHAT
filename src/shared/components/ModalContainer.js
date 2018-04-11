// @flow

import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'

const FormField = styled.div`
  margin: 1em auto;
`
/* eslint-disable */
// flow-disable-next-line
class ModalContainer extends React.Component {
  constructor() {
    super()
    // flow-disable-next-line
    this.state = {
      modalIsOpen: false,
    }
  }

  afterOpenModal = () => {}

  // flow-disable-next-line
  openModal = () => this.setState({ modalIsOpen: true })
  // flow-disable-next-line
  closeModal = () => this.setState({ modalIsOpen: false })

  render() {
    return (
      <div>
        <button onClick={this.openModal}>{this.props.openModalText}</button>
        {/* flow-disable-next-line */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel={this.props.label}
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            {this.props.subtitle}
          </h2>{' '}
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
/* eslint-disable flow-disable */

export default ModalContainer
