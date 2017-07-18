import * as React from 'react'
import {render as renderDom } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { root } from './reducers/root'
import { App } from './components/App'

const store = createStore(root)
const viewport = document.getElementById('viewport')

const render = () => renderDom(
  <Provider store={store}>
    <App/>
  </Provider>,
  viewport
)

declare var module: any

if (module.hot) {
  module.hot.accept('./components/App', render)
}

render()
