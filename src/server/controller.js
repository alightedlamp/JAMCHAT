// @flow

import passport from 'passport'

import User from './models/user'
import Jam from './models/jam'
import Message from './models/message'
// import Arrangement from './models/arrangement'
// import Sequence from './models/sequence'

/* ////////////////////////////////////////
//      GET HTML Routes
//////////////////////////////////////// */

export const homePage = () => null
export const aboutPage = () => null
export const lobbyPage = () => null
export const loginPage = () => null
export const registerPage = () => null
export const jamPage = () => null
export const userProfilePage = () => null

/* ////////////////////////////////////////
//      GET API Routes
//////////////////////////////////////// */

export const listRooms = (req, res, next) =>
  Jam.find({}).then((docs) => {
    res.locals.docs = docs
    next()
  })

// eslint-disable-next-line
export const getMessages = (req, res, next) => {
  if (req.params.id) {
    Message.find({ room: req.params.id }, 'content created_at')
      .populate('user', 'username')
      .exec()
      .then((docs) => {
        res.locals.docs = docs
        next()
      })
  } else {
    return res.status(500).json({ error: 'You did not provide a room ID' })
  }
}

/* ////////////////////////////////////////
//      POST API Routes
//////////////////////////////////////// */

export const userRegister = (req: Object, res: Object, next: Function) => {
  User.register(
    new User({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
    }),
    req.body.password,
  )
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
    created_by: req.user.username,
    title: req.body.title,
    bpm: req.body.bpm,
  })

export const joinRoom = (req: Object) =>
  Jam.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        // eslint-disable-next-line
        users: { username: req.user.username, id: req.user._id },
        contributors: { username: req.user.username },
      },
    },
    { new: true },
  ).exec()

export const leaveRoom = (req: Object) =>
  Jam.findByIdAndUpdate(
    { _id: req.params.id },
    { $pull: { users: { username: req.body.username } } },
  )

export const handleRoomAction = (req: Object, res: Object, next: Function) => {
  switch (req.body.action) {
    case 'create':
      return createRoom(req).then((doc) => {
        res.locals.doc = doc
        next()
      })
    case 'join':
      return joinRoom(req).then((doc) => {
        res.locals.room = doc
        res.locals.user = req.user
        next()
      })
    case 'leave':
      return leaveRoom(req).then(() => next())
    default:
      return new Error(`Sorry, an error occurred when attempting to ${req.body.action} room.`)
  }
}

export const postMessage = (req: Object, res: Object, next: Function) =>
  Message.create({
    user: req.user.id,
    content: req.body.content,
    room: req.body.room,
    created_at: Date.now(),
  }).then((doc) => {
    // eslint-disable-next-line
    Message.findOne({ _id: doc._id })
      .populate('user', 'username')
      .populate('room', '_id')
      .exec()
      .then((populatedDoc) => {
        res.locals.doc = populatedDoc
        next()
      })
  })
