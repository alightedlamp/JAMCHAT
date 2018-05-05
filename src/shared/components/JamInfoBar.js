// @flow

import React from 'react'
import styled from 'styled-components'

import InfoBar from './InfoBar'

const Heading = styled.div`
  width: 100%;
`

const JamInfoBar = ({ title, createdBy, bpm }: Object) => (
  <InfoBar background="#ff5555">
    <Heading>
      <h4>
        <strong>{title}</strong> by {createdBy}
      </h4>
    </Heading>
    <p>
      <strong>BPM:</strong> {bpm}
    </p>
  </InfoBar>
)

export default JamInfoBar
