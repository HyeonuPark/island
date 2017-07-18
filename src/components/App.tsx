import * as React from 'react'

import { Board } from './Board'

import * as css from './App.css'

export const App = () => (
  <div className={css.container}>
    <Board/>
    <div className={css.panel}>
      I'm a panel!
    </div>
  </div>
)
