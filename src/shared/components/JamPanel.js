// @flow

import React from 'react'

import PanelWrapper from './PanelWrapper'
import JamInfoBar from './JamInfoBar'
import InstrumentPanel from './instrument/InstrumentPanel'

const JamPanel = (room: Object) => (
  <PanelWrapper width="calc(100% - 400px)">
    <JamInfoBar room={room} />
    <InstrumentPanel />
  </PanelWrapper>
)

export default JamPanel
