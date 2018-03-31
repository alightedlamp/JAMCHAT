// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Header from './component/Header'
import Intro from './container/Intro'
import Nav from './Nav'
// import pages

const App = () => (
  <div className="App">
    <Header />
    <Intro />
    <Nav />
  </div>
)

export default App
