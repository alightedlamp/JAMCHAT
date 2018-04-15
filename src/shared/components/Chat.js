// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 13px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

const Message = styled.div`
  margin: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 5px;
`

const MessageUser = styled.div`
  font-weight: bold;
  padding-right: 5px;
`

const MessageContent = styled.div`
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.8);
`

const MessageTime = styled.span`
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9em;
`

class Chat extends Component {
  componentDidMount() {
    const { onMount, room } = this.props
    onMount(room)
  }
  componentWillUnmount() {
    const { onUnmount } = this.props
    onUnmount()
  }
  render() {
    return (
      <MessageWrapper>
        {this.props.messages &&
          this.props.messages.map(message => (
            <Message>
              <MessageUser>
                {message.user}{' '}
                <MessageTime>
                  {moment(message.created_at).format('lll')}
                </MessageTime>
              </MessageUser>{' '}
              <MessageContent>{message.content}</MessageContent>
            </Message>
          ))}
      </MessageWrapper>
    )
  }
}

Chat.propTypes = {
  onMount: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired,
  room: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
}

Chat.defaultProps = {
  messages: [
    {
      user: 'DJ JAMCHAT',
      content: 'Type a message to get started',
    },
  ],
}

export default Chat
