// @flow

import * as React from 'react'
import Modal from 'react-modal'

type Props = {
  modalIsOpen: boolean,
  closeModal: Function,
  children: React.Node,
}

const modalStyle = {
  content: {
    width: '500px',
    minHeight: '150px',
    top: '50%',
    left: '50%',
    bottom: 'initial',
    transform: 'translate(-50%, -75%)',
    background: 'aliceblue',
    border: 0,
    borderRadius: 0,
    padding: '27px',
    boxShadow: '2px 3px 22px 1px rgba(0,0,13,.3)',
  },
}

const ModalWrapper = ({ modalIsOpen, closeModal, children }: Props) => (
  <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyle}>
    {children}
  </Modal>
)

export default ModalWrapper
