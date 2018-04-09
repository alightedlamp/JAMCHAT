// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PanelWrapper from './PanelWrapper'
import Channel from './Channel'

class ChannelList extends Component {
  componentDidMount() {
    const { onMount } = this.props
    onMount()
  }
  render() {
    return (
      <PanelWrapper>
        <div>
          <select>
            <option name="active">Active Channels</option>
            <option name="open">Open Channels</option>
            <option name="inactive">Inactive Channels</option>
          </select>
        </div>
        {this.props.rooms &&
          this.props.rooms.map(room => (
            <Channel name={room.name} user={room.users} bpm={room.bpm} />
          ))}
      </PanelWrapper>
    )
  }
}

ChannelList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.object),
  onMount: PropTypes.func.isRequired,
}

ChannelList.defaultProps = {
  rooms: [],
}

export default ChannelList
