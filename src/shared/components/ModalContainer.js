// @flow

import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'

const modalStyle = {
  content: {
    width: '500px',
    height: '350px',
    display: 'flex',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'aliceblue',
    border: 0,
    boxShadow: '2px 3px 22px 1px rgba(0,0,13,.3)',
  },
}

const CloseButton = styled.button`
  visibility: hidden;
`

const MenuButton = styled.button`
  padding: 7px;
  margin: 0 10px;
  width: 100px;
  font-size: 1.15em;
  border: 3px solid ${props => props.theme.primaryButtonColor};
  background: ${props => props.theme.primaryButtonBgColor};
  color: ${props => props.theme.primaryButtonColor};

  &:hover {
    background: blue;
    color: lightblue;
    transition: 0.5s;
  }
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
