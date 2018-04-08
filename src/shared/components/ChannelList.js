// @flow

import React from 'react'

import PanelWrapper from './PanelWrapper'
import Channel from './Channel'

const ChannelList = props => (
  <PanelWrapper>
    <div>
      <button>Active Channels</button>
      <button>Inactive Channels</button>
    </div>
    {props.channels && props.channels.map(channel => <Channel />)}
  </PanelWrapper>
)

export default ChannelList
