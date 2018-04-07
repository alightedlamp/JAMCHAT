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

const createRoom = (req) => {
  console.log('[controller] creating new room')
  Jam.create({
    name: req.data.name,
  })
}

const joinRoom = req => Jam.update({ id: req.id }, { $push: { users: req.username } })

const leaveRoom = req =>
  Jam.findOne({ id: req.room_id }, (err, doc) => {
    if (err) {
      return err
    }

    const records = { data: doc }
    const { users } = doc
    const currentUserIdx = users.indexOf(req.user_id)
    users.splice(currentUserIdx, 1)
    users.save((err) => {
      if (err) {
        return err
      }
      return records
    })
  }) // Remove the user from the room

export const handleRoomAction = (req: Object, res: Object) => {
  console.log(req.body.action)
  switch (req.body.action) {
    case 'create':
      return createRoom(req)
    case 'join':
      return joinRoom(req)
    case 'leave':
      return leaveRoom(req)
    default:
      return new Error('An error occurred in entering or leaving the chat.')
  }
}
