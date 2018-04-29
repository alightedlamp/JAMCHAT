import Tone from 'tone'

export class Arrangement {
  constructor(instruments, sequences) {
    this.instruments = instruments
    this.sequences = sequences
  }

  startTransport = (bpm) => {
    Tone.Transport.bpm.value = bpm
    Tone.Transport.loop = true
    Tone.Transport.start()
  }

  stopTransport = () => {
    Tone.Transport.stop()
  }
}

export class Instrument {
  constructor(settings) {
    this.settings = settings
    this.instrument = ''
  }

  initInstrument = () => {
    this.instrument = new Tone.Synth({
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
  }
}

export class Sequence {
  constructor(sequence, instrument) {
    this.sequence = sequence
    this.instrument = instrument
  }

  playNote = (note) => {
    console.log(`playing note: ${note}`)
    this.instrument.triggerAttackRelease(note, '4n', '8n')
  }

  initSequence = (sequence) => {
    this.sequence = new Tone.Sequence(this.playNote, sequence, '4n')
    this.sequence.loop = true
  }

  playSequence = (sequence) => {
    console.log('playing sequence')
    this.sequence = new Tone.Sequence(this.playNote, sequence, '4n')
    this.sequence.loop = true
    this.sequence.start(0)
  }
  stopSequence = () => {
    this.sequence.stop()
  }
}
