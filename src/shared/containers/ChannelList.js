// @flow

import { connect } from 'react-redux'
import { listRooms } from '../actions/jamroom'

import ChannelList from '../components/ChannelList'

const mapStateToProps = state => ({
  channels: state.channels,
})

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(listRooms()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
