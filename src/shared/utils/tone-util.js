import Tone from 'tone'

export class Instrument {
  constructor(settings) {
    this.settings = settings
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

export class Arrangement {
  constructor(track, bpm) {
    this.track = track
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

  resetArrangement = () => {
    this.instruments = []
    this.sequences = []
    this.bpm = null
  }
}
