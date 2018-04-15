// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import PageWrapper from '../PageWrapper'
import JamPanel from '../../containers/JamPanel'
import ChatPanel from '../ChatPanel'

class Jam extends Component {
  componentDidMount() {}
  componentWillUnmount() {
    const { onUnmount, username, roomId } = this.props
    onUnmount(username, roomId)
  }
  render() {
    const title =
      this.props.title && this.props.createdBy
        ? `Jam ${this.props.name} by ${this.props.createdBy}`
        : 'Jam'
    const description =
      this.props.title && this.props.createdBy
        ? `${this.props.title}, a collaboriative jam started by ${
          this.props.createdBy
        }`
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
          <ChatPanel users={this.props.users} />
        </PageWrapper>
      </PageWrapper>
    )
  }
}

Jam.propTypes = {
  name: PropTypes.string,
  createdBy: PropTypes.string,
  title: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.object),
  username: PropTypes.string,
  roomId: PropTypes.string,
  onUnmount: PropTypes.func.isRequired,
}

Jam.defaultProps = {
  name: '',
  createdBy: '',
  title: '',
  users: '',
  username: '',
  roomId: '',
}

export default Jam
