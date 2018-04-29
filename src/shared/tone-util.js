import Tone from 'tone'

export class Arrangement {
  constructor(instruments, sequences, bpm) {
    this.instruments = instruments
    this.sequences = sequences
    this.bpm = bpm
  }

  startTransport = () => {
    Tone.Transport.bpm.value = this.bpm
    Tone.Transport.loop = true
    Tone.Transport.start()
  }

  stopTransport = () => {
    Tone.Transport.stop()
  }
}

export class Instrument {
  constructor(settings) {
    // Using default settings for now - later these can be passed in by client
    this.settings = {
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
    }
    this.instrument = ''
  }

  mountInstrument = () => {
    this.instrument = new Tone.Synth(this.settings).toMaster()
  }
}

export class Sequencer {
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
