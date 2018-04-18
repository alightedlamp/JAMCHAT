import mongoose, { Schema } from 'mongoose'

const arrangementSchema = Schema({
  room_id: {
    type: Schema.Types.ObjectId,
    ref: 'Jam',
  },
  sequences: Array,
})

export default mongoose.model('Arrangement', arrangementSchema)
