// @flow

import React from 'react'
import styled from 'styled-components'

type Props = {
  step: number,
  note: string,
  octave: number,
  active: boolean,
  handleClick: Function,
}

const StyledInput = styled.input`
  width: 30px;
  height: 35px;
  appearance: none;
  border: 1px solid #717171;

  &:checked {
    background: mediumspringgreen;
  }
`

const Step = ({
  step, note, octave, active, handleClick,
}: Props) => (
  <div>
    <StyledInput
      type="checkbox"
      value={`${step}-${note + octave}`}
      onClick={handleClick}
      checked={active}
    />
  </div>
)

export default Step
