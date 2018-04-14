// @flow

import React from 'react'
import Helmet from 'react-helmet'

import PageWrapper from '../PageWrapper'
import JamPanel from '../JamPanel'
import ChatPanel from '../ChatPanel'

type Props = {
  name: string,
  creator: string,
}

// Make this a class, where mount and unmount load room data into state
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
      <PageWrapper>
        <JamPanel />
        <ChatPanel />
      </PageWrapper>
    </PageWrapper>
  )
}

export default Jam
