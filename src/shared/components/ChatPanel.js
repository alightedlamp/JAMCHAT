// @flow

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InfoBar from './InfoBar'
import Chat from '../containers/Chat'
import ChatForm from '../containers/ChatForm'

const ChatInfoBar = InfoBar.extend`
  border-right: 1px solid #333;
`

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
  width: calc(100% - 26px);
  padding: 13px;
  margin: 13px;
  border-radius: 5px;
  border: 2px solid lightsteelblue;
`

const ChatPanel = ({ users }) => (
  <ChatWrapper>
    <ChatInfoBar>
      <ul>{users && users.map(user => <li>{user.username}</li>)}</ul>
    </ChatInfoBar>
    <Chat />
    <ChatForm>
      <MessageInput name="content" />
    </ChatForm>
  </ChatWrapper>
)

ChatPanel.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
}

ChatPanel.defaultProps = {
  users: [],
}

export default ChatPanel
