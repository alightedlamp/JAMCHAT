// @flow

import * as React from 'react'
import styled from 'styled-components'

const Page = styled.section`
  margin-top: 115px;
  width: 100%;
`

const PageWrapper = props => <Page>{props.children}</Page>

export default PageWrapper
