// @flow

import React from 'react'
import styled from 'styled-components'

const ChatForm = (handleClick: Function) => (
  <form onSubmit={handleClick}>
    <input name="message" /> <button type="submit">Send</button>
  </form>
)

export default ChatForm
