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
            <Channel
              title={room.title}
              createdBy={room.created_by}
              users={room.users}
              bpm={room.bpm}
              roomId={room._id}
              createdAt={room.created_at}
            />
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
