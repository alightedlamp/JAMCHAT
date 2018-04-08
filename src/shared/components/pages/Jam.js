// @flow

import React from 'react'

import PageWrapper from '../PageWrapper'
import PanelWrapper from '../PanelWrapper'
import ChatPanel from '../ChatPanel'

const Jam = props => (
  <PageWrapper>
    <PanelWrapper>
      <h2 className="f2 lh-title mt3">Jam{(props.name && `: ${props.name}`) || ''}</h2>
      <ChatPanel />
    </PanelWrapper>
  </PageWrapper>
)

export default Jam
