// @flow

import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

class ModalButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
    }
  }
  handleOnChangeEvent = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleOpenModal = () => this.setState({ showModal: true })

  handleCloseModal = () => this.setState({ showModal: false })

  render() {
    const modalText = this.props.modalText
    return (
      <div>
        <button onClick={this.handleOpenModal}>{this.props.label}</button>
        <Modal isOpen={this.state.showModal} contentLabel={this.props.label}>
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <h3>{this.props.label}</h3>
          <p>{modalText}</p>
          <form onSubmit={this.props.handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>{' '}
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={() => this.handleOnChangeEvent()}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>{' '}
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={() => this.handleOnChangeEvent()}
              />
            </div>
          </form>
          <button>Submit</button>
        </Modal>
      </div>
    )
  }
}

ModalButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default ModalButton
