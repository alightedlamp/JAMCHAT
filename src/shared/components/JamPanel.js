// @flow

import React from 'react'

import PanelWrapper from './PanelWrapper'
import JamInfoBar from './JamInfoBar'
import InstrumentPanel from './instrument/InstrumentPanel'
import ToneWrapper from '../containers/instrument/ToneWrapper'

type Props = {
  title: string,
  createdBy: string,
  bpm: string,
  userChannel: Object,
  visitorChannels: Array<Object>,
}

/*
  ToneWrapper wraps ToneJS, so we send it the users' instruments
  and sequences from this top-level element
*/

const JamPanel = ({
  title,
  createdBy,
  bpm,
  userChannel,
  visitorChannels,
}: Props) => (
  <PanelWrapper width="calc(100% - 400px)">
    <JamInfoBar title={title} createdBy={createdBy} bpm={bpm} />
    <InstrumentPanel />
    <ToneWrapper
      bpm={bpm}
      instrumentSettings={userChannel.instrument}
      sequence={userChannel.sequencer.sequence}
    />
    {/* <VisitorsInstrumentPanel />
    <ArrangementPanel /> */}
  </PanelWrapper>
)

export default JamPanel
