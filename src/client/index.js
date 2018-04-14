import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import App from '../shared/App'
import { APP_CONTAINER_SELECTOR } from '../shared/config'
import { initSocket, emit } from './socket'

import rootReducer from '../shared/reducers'

const history = createHistory()
const historyMiddleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware.withExtraArgument({ emit }),
    historyMiddleware,
  )),
)

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <ConnectedRouter history={history}>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/App').default
    ReactDOM.render(wrapApp(NextApp), rootEl)
  })
}

initSocket(store)
