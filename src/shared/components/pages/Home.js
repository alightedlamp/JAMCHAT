// @flow

import React from 'react'
import styled from 'styled-components'

const Page = styled.section`
  position: absolute;
  width: 100%;
  margin-top: 75px;
`

const ContentBlock = styled.section`
  height: 500px;
  background-color: ${props => props.color};
`

const Home = () => (
  <Page>
    <ContentBlock className="about" color="blue">
      <h2>Make music while chatting with your friends</h2>
    </ContentBlock>
    <ContentBlock className="get-started" color="yellow">
      <button>Get Started!</button>
    </ContentBlock>
  </Page>
)

export default Home
