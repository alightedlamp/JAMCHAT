// @flow

import React from 'react'
import { range } from 'lodash'

import PanelWrapper from '../PanelWrapper'
import Step from '../../containers/instrument/Step'

import { cMajor } from '../../constants/instrument'

const StyledPanel = PanelWrapper.extend`
  justify-content: space-evenly;
`
type Props = {
  octave: number,
  sequence: Array<string>,
}

// cMajor is hardcoded here for proof of concept
// Can be swapped out for a scale attribute from state later
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
