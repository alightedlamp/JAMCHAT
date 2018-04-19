// @flow

import { connect } from 'react-redux'

import MixerPanel from '../../components/instrument/MixerPanel'

const mapStateToProps = state => ({
  muted: state.currentRoom.userChannel.instrument.muted,
  playing: state.currentRoom.userChannel.instrument.playing,
})

export default connect(mapStateToProps)(MixerPanel)
