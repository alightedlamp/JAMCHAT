// @flow

import { connect } from 'react-redux'
import * as toneUtil from '../../utils/tone-util'
import { editSequence } from '../../actions/sequencer'
import SequencerPanel from '../../components/instrument/SequencerPanel'

const mapStateToProps = state => ({
  octave: state.currentRoom.userChannel.instrument.octave,
  sequence: state.currentRoom.userChannel.sequencer.sequence,
})

const mapDispatchToProps = dispatch => ({
  onUpdate: (sequence) => {
    dispatch(editSequence(sequence))
    toneUtil.updateSequence(sequence)
    toneUtil.playSequence()
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SequencerPanel)
