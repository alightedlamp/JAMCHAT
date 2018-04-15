// @flow
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import PageWrapper from '../PageWrapper'
import PanelWrapper from '../PanelWrapper'
import ChannelList from '../../containers/ChannelList'

const LobbyView = styled.section`
  grid-template-rows: 100px auto;
`

const title = 'Sessions'
const description = 'List of channels on JAMCHAT.CLUB'

const Lobby = () => (
  <PageWrapper scroll>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { property: 'og:title', content: title },
      ]}
    />
    <LobbyView>
      <h2 className="f2 lh-title mt3">Sessions</h2>
      <ChannelList />
    </LobbyView>
  </PageWrapper>
)

export default Lobby
