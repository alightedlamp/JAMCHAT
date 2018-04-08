// @flow

import React from 'react'

import PanelWrapper from './PanelWrapper'
import Channel from './Channel'

type Props = {
  channels: Object,
}

const ChannelList = ({ channels }: Props) => (
  <PanelWrapper>
    <div>
      <select>
        <option name="active">Active Channels</option>
        <option name="open">Open Channels</option>
        <option name="inactive">Inactive Channels</option>
      </select>
    </div>
    {channels &&
      channels.map(channel => (
        <Channel name={channel.name} user={channel.users} bpm={channel.bpm} />
      ))}
  </PanelWrapper>
)

export default ChannelList
