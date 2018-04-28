import Tone from 'tone'

import React, { Component } from 'react'

type Props = {
  sequence: Array<string>,
  instrument: string,
}

class ToneWrapper extends Component<Props> {
  state = {
    sequence: [],
    instrument: '',
  }

  componentWillMount() {
    const { sequence, instrument } = this.props
    this.initInstrument(instrument)
    this.setState({ sequence })
  }
  initInstrument = (instrument) => {
    const toneInstrument = new Tone.Synth({
      oscillator: {
        type: 'fmsquare',
        modulationType: 'sawtooth',
        modulationIndex: 3,
        harmonicity: 3.4,
      },
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.1,
        release: 0.1,
      },
    }).toMaster()

    this.setState({ instrument: toneInstrument })
  }
  playNote = (note) => {
    this.state.instrument.triggerAttackRelease(note, '4n', '8n')
  }
  playSequence = (sequence) => {
    const toneSequence = new Tone.Sequence(this.playNote, sequence, '4n')
  }
  render() {
    return (
      <div style={{ display: 'none' }}>
        {this.state.sequence &&
          this.state.instrument &&
          this.playSequence(this.state.sequence, this.state.instrument)}
      </div>
    )
  }
}

export default ToneWrapper
