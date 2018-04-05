// @flow

import {
  homePage,
  aboutPage,
  lobbyPage,
  jamPage,
  loginPage,
  registerPage,
  userProfilePage,
  userRegister,
  userLogin,
  userLogout,
} from './controller'

import {
  HOME_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  LOBBY_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
  USER_REGISTER_ROUTE,
  USER_LOGIN_ROUTE,
  USER_LOGOUT_ROUTE,
  jamPageRoute,
  userProfilePageRoute,
} from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, homePage()))
  })

  app.get(ABOUT_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, aboutPage()))
  })

  app.get(LOBBY_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, lobbyPage()))
  })

  app.get(LOGIN_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, loginPage()))
  })

  app.get(REGISTER_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, registerPage()))
  })

  app.get(jamPageRoute(), (req, res) => {
    res.send(renderApp(req.url, jamPage(req.params.id)))
  })

  app.get(userProfilePageRoute(), (req, res) => {
    res.send(renderApp(req.url, userProfilePage(req.params.id)))
  })

  app.post(USER_REGISTER_ROUTE, userRegister, (req, res) => res.json(req.user))
  app.post(USER_LOGIN_ROUTE, userLogin)
  app.post(USER_LOGOUT_ROUTE, userLogout)

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
