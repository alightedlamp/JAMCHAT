import mongoose, { Schema } from 'mongoose'

const messageSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  jamroom: {
    type: Schema.Types.ObjectId,
    ref: 'Jam',
  },
  message: {
    type: String,
    trim: true,
  },
  created_at: Date,
})

export default mongoose.model('Message', messageSchema)
