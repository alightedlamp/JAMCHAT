import mongoose from 'mongoose'

import { MONGODB_URI } from '../shared/config'

mongoose.Promise = Promise
mongoose.connect(MONGODB_URI)

/* eslint-disable no-console */
mongoose.connection.on('connected', () => console.log('DB connected.'))
mongoose.connection.on('error', err => console.error(err))
mongoose.connection.on('disconnected', () => console.log('DB disconnected.'))
/* eslint-enable no-console */
