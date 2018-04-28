// @flow

import React from 'react'
import styled from 'styled-components'
import { range } from 'lodash'

import PanelWrapper from '../PanelWrapper'
import Step from '../../containers/instrument/Step'

import { cMajor } from '../../constants/instrument'

type Props = {
  octave: number,
  sequence: Array<string>,
}

const StyledPanel = PanelWrapper.extend`
  justify-content: space-evenly;
`

const SequencerPanel = ({ sequence, octave }: Props) => (
  <StyledPanel width="80%" background="#484848">
    {range(16).map((step, i) => (
      <div>
        {cMajor.map((note) => {
          const isActive = sequence[i] === `${note}${octave}`
          return (
            <Step
              key={step}
              step={step}
              note={note}
              active={isActive}
              octave={octave}
            />
          )
        })}
      </div>
    ))}
  </StyledPanel>
)

export default SequencerPanel
