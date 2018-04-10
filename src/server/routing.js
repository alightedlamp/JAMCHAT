// @flow

import * as controller from './controller'
import * as routes from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
  /* ////////////////////////////////////////
  //      GET HTML Routes
  //////////////////////////////////////// */

  app.get(routes.HOME_PAGE_ROUTE, (req, res) =>
    res.send(renderApp(req.url, controller.homePage())))

  app.get(routes.ABOUT_PAGE_ROUTE, (req, res) =>
    res.send(renderApp(req.url, controller.aboutPage())))

  app.get(routes.LOBBY_PAGE_ROUTE, (req, res) =>
    res.send(renderApp(req.url, controller.lobbyPage())))

  app.get(routes.LOGIN_PAGE_ROUTE, (req, res) =>
    res.send(renderApp(req.url, controller.loginPage())))

  app.get(routes.REGISTER_PAGE_ROUTE, (req, res) =>
    res.send(renderApp(req.url, controller.registerPage())))

  app.get(routes.jamPageRoute(), (req, res) =>
    controller
      .joinRoom(req)
      .then(() => res.send(renderApp(req.url, controller.jamPage()))))

  app.get(routes.userProfilePageRoute(), (req, res) =>
    res.send(renderApp(req.url, controller.userProfilePage())))

  /* ////////////////////////////////////////
  //      GET API Routes
  //////////////////////////////////////// */

  app.get(routes.LIST_ROOMS_ROUTE, controller.listRooms, (req, res) => {
    res.json(res.locals.docs)
  })

  /* ////////////////////////////////////////
  //      POST API Routes
  //////////////////////////////////////// */

  app.post(routes.jamPageRoute(), controller.handleRoomAction, (req, res) =>
    res.json(res.locals.doc))

  app.post(routes.USER_REGISTER_ROUTE, controller.userRegister, (req, res) =>
    res.json({ username: req.user.username }))

  app.post(routes.USER_LOGIN_ROUTE, controller.userLogin, (req, res) =>
    res.json({ username: req.user.username }))

  app.post(routes.USER_LOGOUT_ROUTE, controller.userLogout)

  app.post(routes.CREATE_ROOM_ROUTE, controller.handleRoomAction, (req, res) =>
    res.json(res.locals.doc))

  app.post(routes.POST_MESSAGE_ROUTE, controller.postMessage, (req, res) =>
    res.json(res.locals.doc))

  /* ////////////////////////////////////////
  //      General Error Handlers
  //////////////////////////////////////// */

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })
}
