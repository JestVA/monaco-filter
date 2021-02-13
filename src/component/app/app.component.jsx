import React from 'react'
import { Topics } from '../topics/topics.component'
import { Related } from '../related/related.component'

import * as SA from './app.style'

const App = () => {
  return (
    <SA.StyledAppWarrper>
      <SA.StyledRouter>
        <Topics path="/"/>
        <Related path="related"/>
      </SA.StyledRouter>
    </SA.StyledAppWarrper>
  )
}

export { App }
