// @flow

import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'

import MenuButton from '../components/MenuButton'

const modalStyle = {
  content: {
    width: '500px',
    minHeight: '150px',
    top: 'initial',
    left: '50%',
    transform: 'translate(-50%, -75%)',
    background: 'aliceblue',
    border: 0,
    borderRadius: 0,
    padding: '27px',
    boxShadow: '2px 3px 22px 1px rgba(0,0,13,.3)',
  },
}

const CloseButton = styled.button`
  visibility: hidden;
`

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
        <MenuButton onClick={this.openModal}>
          {this.props.openModalText}
        </MenuButton>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel={this.props.label}
          style={modalStyle}
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            {this.props.subtitle}
          </h2>{' '}
          <CloseButton onClick={this.closeModal} hidden>
            close
          </CloseButton>
          <form onSubmit={this.props.handleSubmit}>
            <FormField>{this.props.children}</FormField>
            <MenuButton type="submit">{this.props.submitButtonText}</MenuButton>
          </form>
        </Modal>
      </div>
    )
  }
}
/* eslint-disable flow-disable */

export default ModalContainer
