import mongoose, { Schema } from 'mongoose'

const sequenceSchema = Schema({
  room_id: {
    type: Schema.Types.ObjectId,
    ref: 'Jam',
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  notes: {
    type: Array,
  },
})

export default mongoose.model('Sequence', sequenceSchema)
