// @flow

import React from 'react'
import styled from 'styled-components'

import InfoBar from './InfoBar'

const Heading = styled.div`
  width: 100%;
`

const JamInfoBar = ({ room }: Object) => (
  <InfoBar background="#ff5555">
    <Heading>
      <h4>
        <strong>{room.title}</strong> by {room.created_by}
      </h4>
    </Heading>
    <p>
      <strong>BPM:</strong> {room.bpm}
    </p>
  </InfoBar>
)

export default JamInfoBar
