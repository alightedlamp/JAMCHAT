// @flow

import React from 'react'
import styled from 'styled-components'
import { range } from 'lodash'

import PanelWrapper from '../PanelWrapper'
import Step from './Step'

import { cMajor } from '../../constants/instrument'

const StyledPanel = PanelWrapper.extend`
  justify-content: space-evenly;
`

const SequencerPanel = () => (
  <StyledPanel width="80%">
    {range(16).map(step => (
      <div>
        {cMajor.map(note => <Step key={step} step={step} note={note} />)}
      </div>
    ))}
  </StyledPanel>
)

export default SequencerPanel
