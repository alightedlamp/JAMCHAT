import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import App from '../shared/App'
import history from '../shared/history'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

import { userReducer } from '../shared/reducers/user'

const historyMiddleware = routerMiddleware(history)

const store = createStore(
  combineReducers({ user: userReducer, router: routerReducer }),
  composeWithDevTools(applyMiddleware(historyMiddleware, thunkMiddleware)),
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
