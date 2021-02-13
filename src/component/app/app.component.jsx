import React from 'react'
// import { Provider}
import { Topics } from '../topics/topics.component'

import * as SA from './app.style'

const App = () => {
  return (
    <SA.StyledAppWarrper>
      {/* <div>Hello Monaco</div> */}
      <Topics />
    </SA.StyledAppWarrper>
  )
}

export { App }
