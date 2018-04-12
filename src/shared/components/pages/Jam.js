// @flow

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import PageWrapper from '../PageWrapper'
import JamPanel from '../JamPanel'
import ChatPanel from '../ChatPanel'

type Props = {
  name: string,
  creator: string,
}

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
`

const Jam = ({ name, creator }: Props) => {
  const title = name && creator ? `Jam ${name} by ${creator}` : 'Jam'
  const description =
    name && creator
      ? `${name}, a collaboriative jam started by ${creator}`
      : 'A collaborative jam on JAMCHAT.CLUB'

  return (
    <PageWrapper>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { property: 'og:title', content: title },
        ]}
      />
      <h2 className="f2 lh-title mt3">Jam{(name && `: ${name}`) || ''}</h2>
      <FlexWrapper>
        <JamPanel />
        <ChatPanel />
      </FlexWrapper>
    </PageWrapper>
  )
}

export default Jam
