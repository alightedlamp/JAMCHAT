// @flow

import * as controller from './controller'
import * as routes from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
  // GET routes

  app.get(routes.HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, controller.homePage()))
  })

  app.get(routes.ABOUT_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, controller.aboutPage()))
  })

  app.get(routes.LOBBY_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, controller.lobbyPage()))
  })

  app.get(routes.LOGIN_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, controller.loginPage()))
  })

  app.get(routes.REGISTER_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, controller.registerPage()))
  })

  app.get(routes.jamPageRoute(), (req, res) => {
    res.send(renderApp(req.url, controller.jamPage(req.params.id)))
  })

  app.get(routes.userProfilePageRoute(), (req, res) => {
    res.send(renderApp(req.url, controller.userProfilePage(req.params.id)))
  })

  // POST routes
  app.post(routes.jamPageRoute(), controller.handleRoomAction)
  app.post(routes.USER_REGISTER_ROUTE, controller.userRegister, (req, res) =>
    res.json({ username: req.user.username }))
  app.post(routes.USER_LOGIN_ROUTE, controller.userLogin, (req, res) =>
    res.json({ username: req.user.username }))
  app.post(routes.USER_LOGOUT_ROUTE, controller.userLogout)
  app.post(routes.CREATE_ROOM_ROUTE, controller.handleRoomAction, (req, res) => {
    res.json({ data: req.jam })
  })

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
