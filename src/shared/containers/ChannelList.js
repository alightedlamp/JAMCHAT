// @flow

import { connect } from 'react-redux'

import ChannelList from '../components/ChannelList'

const mapStateToProps = state => ({
  channels: state.channels,
})

export default connect(mapStateToProps)(ChannelList)
