// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import PageWrapper from '../PageWrapper'
import JamPanel from '../../containers/JamPanel'
import ChatPanel from '../../containers/ChatPanel'

class Jam extends Component {
  componentDidMount() {
    const { onMount, user, roomId } = this.props
    onMount(user.username, user.id, roomId)
  }
  componentWillUnmount() {
    const { onUnmount, user, roomId } = this.props
    onUnmount(user.username, roomId)
  }
  render() {
    const title =
      this.props.title && this.props.createdBy
        ? `Jam ${this.props.title} by ${this.props.createdBy}`
        : 'Jam'
    const description =
      this.props.title && this.props.createdBy
        ? `${this.props.title}, a collaboriative jam started by ${
          this.props.createdBy
        }`
        : 'A collaborative jam on JAMCHAT.CLUB'

    return (
      <PageWrapper scroll={false}>
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
}

Jam.propTypes = {
  name: PropTypes.string,
  createdBy: PropTypes.string,
  title: PropTypes.string,
  user: PropTypes.objectOf(PropTypes.string),
  roomId: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired,
}

Jam.defaultProps = {
  name: '',
  createdBy: '',
  title: '',
  user: '',
  roomId: '',
}

export default Jam
