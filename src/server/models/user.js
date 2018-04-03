import mongoose, { Schema } from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const userSchema = Schema({
  username: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
  avatar_url: {
    type: String,
  },
  last_login: {
    type: Date,
  },
})

userSchema.plugin(passportLocalMongoose)
export default mongoose.model('User', userSchema)
