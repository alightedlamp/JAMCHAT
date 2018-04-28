// @flow

import React from 'react'

import PanelWrapper from '../PanelWrapper'
import SequencerPanel from '../../containers/instrument/SequencerPanel'
import MixerPanel from '../../containers/instrument/MixerPanel'
import InstrumentControlPanel from './InstrumentControlPanel'

const InstrumentPanel = () => (
  <PanelWrapper background="#484848" padding="20">
    <SequencerPanel />
    <MixerPanel />
    <InstrumentControlPanel />
  </PanelWrapper>
)

export default InstrumentPanel
