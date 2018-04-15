// @flow

import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 30px;
  height: 35px;
  appearance: none;
  border: 1px solid #717171;

  &:checked {
    background: mediumspringgreen;
  }
`

const Step = ({ step, note }) => (
  <div>
    <StyledInput type="checkbox" value={`${step}-${note}`} />
  </div>
)

export default Step
