// @flow

import { connect } from 'react-redux'
import { listRooms } from '../actions/lobby'

import ChannelList from '../components/ChannelList'

const mapStateToProps = state => ({
  rooms: state.lobby.rooms,
})

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(listRooms()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
