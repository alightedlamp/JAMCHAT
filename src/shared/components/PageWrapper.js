// @flow

import styled from 'styled-components'

const PageWrapper = styled.section`
  top: 75px;
  position: fixed;
  height: calc(100% - 75px);
  width: 100%;
  overflow-y: ${props => (props.scroll ? 'auto' : 'hidden')};
  background: whitesmoke;
  justify-content: center;
`

export default PageWrapper
