// @flow

import React from 'react'
import styled from 'styled-components'

import PanelWrapper from '../PanelWrapper'
import StartButton from '../../containers/instrument/StartButton'
import MuteButton from '../../containers/instrument/MuteButton'

type Props = {
  playing: boolean,
  muted: boolean,
}

const StyledMixerPanel = PanelWrapper.extend`
  justify-content: center;
`

const Slider = styled.div`
  ${''};
`

const MixerPanel = ({ playing, muted, volume, octave }: Props) => (
  <StyledMixerPanel width="20%" background="#484848" color="white">
    <div>
      <StartButton>{playing ? 'Stop' : 'Start'}</StartButton>
    </div>
    <div>
      <MuteButton>{muted ? 'Unmute' : 'Mute'}</MuteButton>
    </div>
    <Slider>
      <p>Volume:</p>
      <input type="range" value={volume} />
    </Slider>
    <Slider>
      <p>Octave:</p>
      <input type="range" value={octave} />
    </Slider>
  </StyledMixerPanel>
)

export default MixerPanel
