// @flow
import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../PageWrapper'
import PanelWrapper from '../PanelWrapper'
import ChannelList from '../ChannelList'

const LobbyView = styled.section`
  grid-template-rows: 100px auto;
`

const Lobby = () => (
  <PageWrapper>
    <PanelWrapper>
      <LobbyView>
        <h2 className="f2 lh-title mt3">Lobby</h2>
        <ChannelList />
      </LobbyView>
    </PanelWrapper>
  </PageWrapper>
)

export default Lobby
