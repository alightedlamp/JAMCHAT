// @flow

import React from 'react'
import styled from 'styled-components'

import PanelWrapper from '../PanelWrapper'

const BlockPanel = PanelWrapper.extend`
  display: block;
`

const Volume = styled.input`
  transform: rotate(90deg);
  height: 200px;
`

const MixerPanel = () => (
  <BlockPanel width="20%">
    <div>
      <button>Start</button>
    </div>
    <div>
      <button>Mute</button>
    </div>
    <div>
      <Volume type="range" />
    </div>
  </BlockPanel>
)

export default MixerPanel
