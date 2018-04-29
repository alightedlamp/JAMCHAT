// @flow

import { connect } from 'react-redux'

import { createInstrument } from '../../actions/instrument'
import * as toneUtil from '../../utils/tone-util'

import InstrumentPanel from '../../components/instrument/InstrumentPanel'

const mapStateToProps = state => ({
  oscillator: state.currentRoom.userChannel.oscillator,
  envelope: state.currentRoom.userChannel.envelope,
  instrument: state.currentRoom.userChannel.instrument.type,
  octave: state.currentRoom.userChannel.instrument.octave,
  sequence: state.currentRoom.userChannel.sequencer.sequence,
})

const mapDispatchToProps = dispatch => ({
  onMount: (settings) => {
    dispatch(createInstrument())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentPanel)
