// @flow

import React from 'react'
import styled from 'styled-components'

const ChatForm = (handleClick: Function) => (
  <form>
    <input name="message" /> <button onClick={() => handleClick()}>Send</button>
  </form>
)

export default ChatForm
