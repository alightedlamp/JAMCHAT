import mongoose, { Schema } from 'mongoose'

const messageSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: 'Jam',
  },
  content: {
    type: String,
    trim: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
})

export default mongoose.model('Message', messageSchema)
