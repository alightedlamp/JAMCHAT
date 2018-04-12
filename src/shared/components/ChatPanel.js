// @flow

import React from 'react'
import styled from 'styled-components'

import Chat from '../containers/Chat'
import ChatForm from '../containers/ChatForm'

const ChatWrapper = styled.div`
  position: fixed;
  margin-top: 75px;
  bottom: 0;
  right: 0;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  height: 100%;
  overflow-y: scroll;
`

const ChatPanel = () => (
  <ChatWrapper>
    <Chat />
    <ChatForm>
      <input name="content" /> <button type="submit">Send</button>
    </ChatForm>
  </ChatWrapper>
)

export default ChatPanel
