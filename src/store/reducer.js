import { combineReducers } from 'redux'
import { monacoReducer } from './monaco.reducer'

const createReducer = asyncReducers => combineReducers({
  monaco: monacoReducer,
  ...asyncReducers
})

export default createReducer
