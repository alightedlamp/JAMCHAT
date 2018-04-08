// @flow

import React from 'react'

import PanelWrapper from './PanelWrapper'
import Channel from './Channel'

const ChannelList = props => (
  <PanelWrapper>
    <div>
      <select>
        <option>Active Channels</option>
        <option>Inactive Channels</option>
      </select>
    </div>
    {props.channels && props.channels.map(channel => <Channel />)}
  </PanelWrapper>
)

export default ChannelList
