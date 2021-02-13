import React from 'react'
import { render } from 'react-dom'
import { App } from './component/app'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'


const here = document.getElementById('app')

const app = <Provider store={store}><App /></Provider>

render(app, here)
