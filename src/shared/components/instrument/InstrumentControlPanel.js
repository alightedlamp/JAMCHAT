// @flow

import React from 'react'
import styled from 'styled-components'

import PanelWrapper from '../PanelWrapper'

const InstrumentControlPanel = () => (
  <PanelWrapper background="#484848" color="white">
    <div>
      Cutoff: <input type="range" />
    </div>
    <div>
      Resonance: <input type="range" />
    </div>
    <div>
      Fader: <input type="range" />
    </div>
  </PanelWrapper>
)

export default InstrumentControlPanel
