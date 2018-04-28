// @flow

import { connect } from 'react-redux'

import SequencerPanel from '../../components/instrument/SequencerPanel'

const mapStateToProps = state => ({
  octave: state.currentRoom.userChannel.instrument.octave,
  sequence: state.currentRoom.userChannel.sequencer.sequence,
})

export default connect(mapStateToProps)(SequencerPanel)
