// @flow

import React from 'react'
import Helmet from 'react-helmet'

import PageWrapper from '../PageWrapper'
import PanelWrapper from '../PanelWrapper'
import ChatPanel from '../ChatPanel'

type Props = {
  name: string,
  creator: string,
}

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
      <PanelWrapper>
        <h2 className="f2 lh-title mt3">Jam{(name && `: ${name}`) || ''}</h2>
        <ChatPanel />
      </PanelWrapper>
    </PageWrapper>
  )
}

export default Jam
