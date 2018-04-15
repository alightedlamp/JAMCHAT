// @flow

import React from 'react'
import styled from 'styled-components'

import InfoBar from './InfoBar'

// room.room is stupid wtf
const JamInfoBar = ({ room }: Object) => (
  <InfoBar>
    <h4>
      {room.title} by {room.created_by}
    </h4>
    <p>
      <strong>BPM:</strong> {room.bpm}
    </p>
  </InfoBar>
)

export default JamInfoBar
