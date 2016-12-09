import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// import reducers from './reducers'

import Home from './containers/Home/Home'
import Layout from './containers/Layout/Layout'
import Setup from './containers/Setup/Setup'
import NotFound from './containers/NotFound/NotFound'
import './App.scss'

// Initialize tap events for Material UI
injectTapEventPlugin()

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    // ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="setup" component={Setup} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'))
