import express from 'express'
import { Server } from 'http'
import session from 'express-session'
import compression from 'compression'
import passport from 'passport'

import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'
import renderApp from './render-app'

import './db'
import routing from './routing'
import User from './models/user'

const app = express()
const http = Server(app)

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(session({
  secret: 'secret kitty',
  saveUninitialized: false,
  resave: false,
  cookie: { maxAge: 604800 },
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

routing(app)

http.listen(WEB_PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`${APP_NAME} listening on port ${WEB_PORT} ${
    isProd ? '(production)' : '(development).\nKeep "yarn dev:wds" running in an other terminal'
  }`))
