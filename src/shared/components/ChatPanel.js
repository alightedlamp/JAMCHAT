// @flow

import React from 'react'
import styled from 'styled-components'

import Chat from '../containers/Chat'
import ChatForm from '../containers/ChatForm'

const ChatWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  height: 100%;
  overflow-x: scroll;
`

const ChatPanel = () => (
  <ChatWrapper>
    <Chat />
    <ChatForm />
  </ChatWrapper>
)

export default ChatPanel
