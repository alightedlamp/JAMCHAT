// @flow

import React from 'react'
import styled from 'styled-components'

const HeroBlock = styled.section`
  min-height: 500px;
  background-color: ${props => props.color};
  display: grid;
  grid-template-rows: ${props => (props.homepage ? 'auto' : '5em auto')};
`

const HeroBlockWrapper = props => <HeroBlock {...props}>{props.children}</HeroBlock>

export default HeroBlockWrapper
