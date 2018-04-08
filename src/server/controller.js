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

export const userLogin = (req: Object, res: Object, next: Function) =>
  passport.authenticate('local')(req, res, next)

export const userLogout = (req: Object, res: Object) => {
  req.logout()
  res.sendStatus(200)
}

export const createRoom = (req: Object) =>
  Jam.create({
    // eslint-disable-next-line
    created_by: req.user._id,
    title: req.body.title,
  })

export const joinRoom = (req: Object) =>
  Jam.findByIdAndUpdate(
    { _id: req.params.id },
    // eslint-disable-next-line
    {
      $push: {
        users: { username: req.user.username, id: req.user._id },
        contributors: { username: req.user.username },
      },
    },
    { new: true },
  ).exec()

export const leaveRoom = (req: Object) =>
  Jam.findOne({ _id: req.room_id }).then((doc) => {
    const records = { data: doc }
    const { users } = doc
    const currentUserIdx = users.indexOf(req.user_id)
    users.splice(currentUserIdx, 1)

    return users.save((err) => {
      if (err) {
        return err
      }
      return records
    })
  })

export const handleRoomAction = (req: Object, res: Object, next: Function) => {
  switch (req.body.action) {
    case 'create':
      return createRoom(req).then((doc) => {
        res.locals.doc = doc
        next()
      })
    case 'join':
      return joinRoom(req).then((doc) => {
        res.locals.doc = doc
        next()
      })
    case 'leave':
      return leaveRoom(req).then(() => next())
    default:
      return new Error(`Sorry, an error occurred when attempting to ${req.body.action} room.`)
  }
}
