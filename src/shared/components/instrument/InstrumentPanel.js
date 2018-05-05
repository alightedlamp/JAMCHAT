// @flow

import React, { Component } from 'react'

import PanelWrapper from '../PanelWrapper'
import SequencerPanel from '../../containers/instrument/SequencerPanel'
import MixerPanel from '../../containers/instrument/MixerPanel'
import InstrumentControlPanel from './InstrumentControlPanel'

type Props = {
  onMount: Function,
  instrument: string,
  oscillator: Object,
  envelope: Object,
}

class InstrumentPanel extends Component<Props> {
  componentDidMount() {
    const {
      onMount, instrument, oscillator, envelope,
    } = this.props
    const settings = { instrument, oscillator, envelope }
    onMount(settings)
  }
  render() {
    return (
      <div>
        <PanelWrapper background="#484848" padding="20">
          <SequencerPanel />
          <MixerPanel />
          <InstrumentControlPanel />
        </PanelWrapper>
      </div>
    )
  }
}

export default InstrumentPanel
