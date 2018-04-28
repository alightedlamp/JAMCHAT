import Tone from 'tone'

import React, { Component } from 'react'

// eslint-disable-next-line
type Props = {
  instrumentSettings: object,
  sequence: Array<string>,
  bpm: number,
}

class ToneWrapper extends Component<Props> {
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (prevState.isPlaying && !nextProps.instrumentSettings.playing) {
  //     this.stopSequence()
  //   }
  // }

  state = {
    toneInstrument: '',
  }

  componentWillMount() {
    const { instrumentSettings } = this.props
    this.initInstrument(instrumentSettings)
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

    this.setState({ toneInstrument })
  }
  playNote = (note) => {
    console.log(`playing note: ${note}`)
    this.state.toneInstrument.triggerAttackRelease(note, '4n', '8n')
  }
  playSequence = (sequence) => {
    console.log('playing sequence')
    const toneSequence = new Tone.Sequence(this.playNote, sequence, '4n')
    toneSequence.loop = true
    toneSequence.start(0)

    Tone.Transport.bpm.value = this.props.bpm
    Tone.Transport.start()
  }
  stopSequence = () => {
    console.log('stopping sequence')
    Tone.Transport.stop()
  }
  shouldPlaySequence = () =>
    this.props.sequence &&
    this.state.toneInstrument &&
    this.props.instrumentSettings.playing
  render() {
    console.log('rendering tone wrapper')
    if (this.shouldPlaySequence()) {
      return (
        <div style={{ display: 'none' }}>
          {this.playSequence(this.props.sequence)}
        </div>
      )
    }
    return <div style={{ display: 'none' }}>{this.stopSequence()}</div>
  }
}

export default ToneWrapper
