// @flow

import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: #999;
  grid-row-start: 2;
  grid-row-end: 3;
  height: 100px;
  background: #171717;
  color: #9961ff;
  padding: 20px;
`
const Footer = () => <FooterWrapper>Copyright 2018 - Philip Harrell</FooterWrapper>

export default Footer
