// @flow

import React from 'react'
import styled from 'styled-components'

import MenuButton from './MenuButton'
import Input from './Input'
import ModalWrapper from './ModalWrapper'

type Props = {
  handleClick: Function,
  handleSubmit: Function,
  closeModal: Function,
  modalIsOpen: boolean,
}

const Field = styled.div`
  margin: 20px 0;
`

const StartJamModal = ({
  handleClick,
  handleSubmit,
  closeModal,
  modalIsOpen,
}: Props) => (
  <div>
    <MenuButton onClick={handleClick}>New Jam</MenuButton>
    <ModalWrapper modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <h3>Start a Jam</h3>
      <form onSubmit={handleSubmit}>
        <Field>
          <label htmlFor="text">
            <Input type="text" name="title" placeholder="Title" required />
          </label>
        </Field>
        <Field>
          <label htmlFor="bpm">
            <Input type="number" name="bpm" placeholder="BPM" required />
          </label>
        </Field>
        <MenuButton type="submit">Start Jam</MenuButton>
      </form>
    </ModalWrapper>
  </div>
)

export default StartJamModal
