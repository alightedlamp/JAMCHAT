// @flow

import React from 'react'
import styled from 'styled-components'

import PanelWrapper from '../PanelWrapper'

const StyledInstrumentControlPanel = PanelWrapper.extend`
  padding: 20px;
`

const InstrumentControlPanel = () => (
  <StyledInstrumentControlPanel background="#484848" color="white">
    <div>
      <div>Cutoff</div>
      <div>
        <input type="range" />
      </div>
    </div>
    <div>
      <div>Resonance</div>
      <div>
        <input type="range" />
      </div>
    </div>
    <div>
      <div>Fader</div>
      <div>
        <input type="range" />
      </div>
    </div>
  </StyledInstrumentControlPanel>
)

export default InstrumentControlPanel
