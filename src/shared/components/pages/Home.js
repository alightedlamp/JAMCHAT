// @flow

import React from 'react'
import styled from 'styled-components'

import Footer from '../Footer'
import PageWrapper from '../PageWrapper'
import HeroBlockWrapper from '../HeroBlockWrapper'

const Page = styled.section`
  top: 75px;
  width: 100%;
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
  <PageWrapper>
    <HeroBlockWrapper className="about" color="lightblue" homepage="true">
      <CtaHeader>Make music while chatting with your friends</CtaHeader>
    </HeroBlockWrapper>
    <HeroBlockWrapper className="get-started" color="#17A589" homepage="true">
      <CtaButton color="blue">Jam!</CtaButton>
    </HeroBlockWrapper>
    <Footer />
  </PageWrapper>
)

export default Home
