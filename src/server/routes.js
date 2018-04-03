// @flow

import { homePage, aboutPage, lobbyPage, jamPage, userProfilePage } from './controller'

import {
  HOME_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  LOBBY_PAGE_ROUTE,
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

  app.get(jamPageRoute(), (req, res) => {})

  app.get(userProfilePageRoute(), (req, res) => {})

  app.post(USER_REGISTER_ROUTE, (req, res) => {})

  app.post(USER_LOGIN_ROUTE, (req, res) => {})

  app.post(USER_LOGOUT_ROUTE, (req, res) => {})
}
