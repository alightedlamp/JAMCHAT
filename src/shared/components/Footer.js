// @flow

import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: #999;
  display: flex;
  align-items: center;
  height: 100px;
  background: mediumpurple;
  color: rebeccapurple;
  padding: 20px;
`
const Footer = () => (
  <FooterWrapper>Copyright 2018 - Philip Harrell</FooterWrapper>
)

export default Footer
