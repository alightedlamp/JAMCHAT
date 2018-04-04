// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Lobby from './components/pages/Lobby'
import NotFound from './components/pages/NotFound'

import { HOME_PAGE_ROUTE, ABOUT_PAGE_ROUTE, LOBBY_PAGE_ROUTE } from './routes'

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <Home />} />
      <Route path={ABOUT_PAGE_ROUTE} render={() => <About />} />
      <Route path={LOBBY_PAGE_ROUTE} render={() => <Lobby />} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
