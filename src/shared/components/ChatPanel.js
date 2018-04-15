// @flow

import React from 'react'
import styled from 'styled-components'

import InfoBar from './InfoBar'
import Chat from '../containers/Chat'
import ChatForm from '../containers/ChatForm'

const ChatWrapper = styled.div`
  position: fixed;
  margin-top: 75px;
  bottom: 0;
  right: 0;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  height: calc(100% - 75px);
  background: ghostwhite;
  box-shadow: inset 0px 15px 2px rgba(0, 0, 0, 0.3);
`

const MessageInput = styled.input`
  width: 100%;
  padding: 13px;
  margin: 13px;
  border-radius: 5px;
  border: 2px solid lightsteelblue;
`

const ChatPanel = ({ users }) => (
  <ChatWrapper>
    <InfoBar>
      <h4>Participants:</h4>
      <ul>{users && users.map(user => <li>{user.username}</li>)}</ul>
    </InfoBar>
    <Chat />
    <ChatForm>
      <MessageInput name="content" />
    </ChatForm>
  </ChatWrapper>
)

export default ChatPanel
