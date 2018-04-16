// @flow

import React from 'react'
import styled from 'styled-components'

import PanelWrapper from '../PanelWrapper'
import SequencerPanel from './SequencerPanel'
import MixerPanel from './MixerPanel'
import InstrumentControlPanel from './InstrumentControlPanel'

const InstrumentPanel = () => (
  <PanelWrapper background="#484848" padding="20">
    <SequencerPanel />
    <MixerPanel />
    <InstrumentControlPanel />
  </PanelWrapper>
)

export default InstrumentPanel
