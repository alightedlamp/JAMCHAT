// @flow

import passport from 'passport'

import Arrangement from './models/arrangement'
import Jam from './models/jam'
import Message from './models/message'
import Sequence from './models/sequence'
import User from './models/user'

export const homePage = () => null
export const aboutPage = () => null
export const lobbyPage = () => null
export const loginPage = () => null
export const registerPage = () => null

export const jamPage = (id: string) => null

export const userProfilePage = (id: string) => null

export const userRegister = (req: Object, res: Object, next: Function) => {
  User.register(new User({ username: req.body.username }), req.body.password)
    .then(() => passport.authenticate('local')(req, res, next))
    .catch(err => res.status(500).json({ error: err.message }))
}

export const userLogin = () => passport.authenticate('local')

export const userLogout = (req: Object, res: Object) => {
  req.logout()
  res.redirect('/')
}
