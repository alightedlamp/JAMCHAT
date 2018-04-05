// @flow

import React from 'react'
import styled from 'styled-components'

const Page = styled.section`
  top: 75px;
  width: 100%;
`

const ContentBlock = styled.section`
  height: 500px;
  background-color: ${props => props.color};
  display: grid;
`

const CtaHeader = styled.h2`
  align-self: center;
  justify-self: center;
  font-size: 2em;
`

const CtaButton = styled.button`
  align-self: center;
  justify-self: center;
  padding: 10px;
  font-size: 1.25em;
  border: 3px solid ${props => props.color};
`

const Home = () => (
  <Page>
    <ContentBlock className="about" color="lightblue">
      <CtaHeader>Make music while chatting with your friends</CtaHeader>
    </ContentBlock>
    <ContentBlock className="get-started" color="#17A589">
      <CtaButton color="blue">Jam!</CtaButton>
    </ContentBlock>
  </Page>
)

export default Home
