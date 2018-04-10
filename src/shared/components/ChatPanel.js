// @flow

import React from 'react'

import PanelWrapper from './PanelWrapper'

import Chat from '../containers/Chat'
import ChatForm from '../containers/ChatForm'

const ChatPanel = () => (
  <PanelWrapper width="20">
    <Chat />
    <ChatForm />
  </PanelWrapper>
)

export default ChatPanel
