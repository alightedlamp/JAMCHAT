// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PanelWrapper from './PanelWrapper'

const Message = styled.div`
  margin: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, .2)
  padding-top: 5px;
`

const MessageUser = styled.span`
  font-weight: bold;
  padding-right: 5px;
`

const MessageContent = styled.span`
  color: rgba(0, 0, 0, 0.8);
`

class Chat extends Component {
  componentDidMount() {
    const { onMount } = this.props
    onMount()
  }
  render() {
    console.log(this.props)
    return (
      <PanelWrapper>
        <p>This is the chat panel where messages will appear.</p>
        {this.props.messages &&
          this.props.messages.map(message => (
            <Message>
              <MessageUser>{message.user}</MessageUser>{' '}
              <MessageContent>{message.content}</MessageContent>
            </Message>
          ))}
      </PanelWrapper>
    )
  }
}

Chat.propTypes = {
  onMount: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
}

Chat.defaultProps = {
  messages: [
    {
      user: 'dj',
      message: 'Type a message to get started',
    },
  ],
}

export default Chat
