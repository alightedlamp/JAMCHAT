// @flow

import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Page = styled.section`
  top: 75px;
  position: fixed;
  height: calc(100% - 75px);
  width: 100%;
  overflow-y: ${props => (props.scroll ? 'scroll' : 'hidden')};
  background: whitesmoke;
`

const PageWrapper = ({ scroll, children }: Props) => (
  <Page scroll={scroll}>{children}</Page>
)

PageWrapper.propTypes = {
  scroll: PropTypes.bool,
  children: PropTypes.node,
}

PageWrapper.defaultProps = {
  scroll: true,
  children: '',
}

export default PageWrapper
