import mongoose, { Schema } from 'mongoose'

const jamSchema = Schema({
  title: {
    type: String,
    trim: true,
  },
  open: Boolean,
  date_create: Date,
  total_contributors: Number,
})

export default mongoose.model('Jam', jamSchema)
