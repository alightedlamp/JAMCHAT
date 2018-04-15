// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Footer from '../Footer'
import PageWrapper from '../PageWrapper'
import HeroBlockWrapper from '../HeroBlockWrapper'

import { APP_DESCRIPTION } from '../../config'

const CtaHeader = styled.h2`
  align-self: center;
  justify-self: center;
  font-size: 2em;
`

const CtaButton = styled.button`
  padding: 10px;
  font-size: 1.25em;
  border: 3px solid ${props => props.color};
  color: ${props => props.color};
  background: ${props => props.hover};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${props => props.color};
    color: ${props => props.hover};
  }
`

const StyledLink = styled(Link)`
  align-self: center;
  justify-self: center;
`

const Home = () => (
  <PageWrapper scroll>
    <Helmet meta={[{ name: 'description', content: APP_DESCRIPTION }]} />
    <HeroBlockWrapper className="about" color="lightblue" homepage="true">
      <CtaHeader>Chat, Make Music, Collaborate</CtaHeader>
    </HeroBlockWrapper>
    <HeroBlockWrapper className="get-started" color="#17A589" homepage="true">
      <StyledLink to="/lobby">
        <CtaButton color="blue" hover="lightblue">
          Jam!
        </CtaButton>
      </StyledLink>
    </HeroBlockWrapper>
    <Footer />
  </PageWrapper>
)

export default Home
