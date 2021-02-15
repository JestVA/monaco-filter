import React from 'react'
import { Topics } from '../topics'
import { Terms } from '../terms-and-conditions'
import { Provider } from 'react-redux'
import store from '../../store'

import * as SA from './app.style'

const App = () => {
  return (
    <Provider store={store}>
      <SA.StyledAppWarrper>
        <SA.StyledRouter>
          <Topics path="/" />
          <Terms path="/terms-and-conditions"/>
        </SA.StyledRouter>
      </SA.StyledAppWarrper>
    </Provider>
  )
}

export { App }
