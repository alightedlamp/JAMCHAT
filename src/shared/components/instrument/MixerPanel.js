// @flow

import React from 'react'
import styled from 'styled-components'

import PanelWrapper from '../PanelWrapper'
import StartButton from '../../containers/instrument/StartButton'
import MuteButton from '../../containers/instrument/MuteButton'

const StyledMixerPanel = PanelWrapper.extend`
  justify-content: center;
`

const Slider = styled.div`
  ${''};
`

const MixerPanel = () => (
  <StyledMixerPanel width="20%" background="#484848" color="white">
    <div>
      <StartButton>Start</StartButton>
    </div>
    <div>
      <MuteButton>Mute</MuteButton>
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
