// @flow

import React, { Component } from 'react'
import { flatten } from 'lodash'

import PanelWrapper from './PanelWrapper'
import JamInfoBar from './JamInfoBar'
import InstrumentPanel from '../containers/instrument/InstrumentPanel'

type Props = {
  title: string,
  createdBy: string,
  bpm: string,
  onMount: Function,
  userChannel: Object,
  visitorChannels: Array<Object>,
}

class JamPanel extends Component<Props> {
  componentDidMount() {
    // Start the arrangement in it's current form
  }
  componentWillUnmount() {
    // The user left, so destroy the arrangement
  }
  render() {
    return (
      <PanelWrapper width="calc(100% - 400px)">
        <JamInfoBar
          title={this.props.title}
          createdBy={this.props.createdBy}
          bpm={this.props.bpm}
        />
        <InstrumentPanel />
        {/* <VisitorsInstrumentPanel />
        <ArrangementPanel /> */}
      </PanelWrapper>
    )
  }
}

export default JamPanel
