// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import About from './components/pages/About'
import Lobby from './components/pages/Lobby'
import NotFound from './components/pages/NotFound'

import {
  HOME_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  LOBBY_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
} from './routes'

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <Home />} />
      <Route path={ABOUT_PAGE_ROUTE} render={() => <About />} />
      <Route path={LOBBY_PAGE_ROUTE} render={() => <Lobby />} />
      <Route path={LOGIN_PAGE_ROUTE} render={() => <Login />} />
      <Route path={REGISTER_PAGE_ROUTE} render={() => <Register />} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
)

export default App
