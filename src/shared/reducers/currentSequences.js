//  @flow

import { flatten } from 'lodash'

const compileTrackJson = payload =>
  flatten(payload.userChannel, payload.visitorChannels)

const compileToneObjects = json =>
  json.map((track) => {
    const toneInstrument = new toneUtil.Instrument(track.instrument.settings)
    return {
      instrument: toneInstrument,
      sequences: track.sequences.map(sequence => new toneUtil.Sequencer(sequence, toneInstrument)),
    }
  })

const currentSequencesReducer = (
  state: Object = {},
  action: { type: string, payload: Object },
) => {
  switch (action.type) {
    default:
      state
  }
}

export default currentSequencesReducer
