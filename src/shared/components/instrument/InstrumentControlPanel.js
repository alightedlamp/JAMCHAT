// @flow

import React from 'react'
import styled from 'styled-components'

import PanelWrapper from '../PanelWrapper'

const InstrumentControlPanel = () => (
  <PanelWrapper background="#484848" color="white">
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
  </PanelWrapper>
)

export default InstrumentControlPanel
