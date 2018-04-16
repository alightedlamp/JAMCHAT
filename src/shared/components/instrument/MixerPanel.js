// @flow

import React from 'react'
import styled from 'styled-components'

import PanelWrapper from '../PanelWrapper'
import Button from '../Button'

const StyledMixerPanel = PanelWrapper.extend`
  justify-content: center;
`

const MixerButton = styled(Button)`
  width: 100%;
`

const Slider = styled.div`
  ${''};
`

const MixerPanel = () => (
  <StyledMixerPanel width="20%" background="#484848" color="white">
    <div>
      <MixerButton>Start</MixerButton>
    </div>
    <div>
      <MixerButton>Mute</MixerButton>
    </div>
    <Slider>
      <p>Volume:</p>
      <input type="range" />
    </Slider>
    <Slider>
      <p>Octave:</p>
      <input type="range" />
    </Slider>
  </StyledMixerPanel>
)

export default MixerPanel
