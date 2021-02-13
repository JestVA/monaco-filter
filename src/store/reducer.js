import { combineReducers } from 'redux'
import { topicsReducer } from './topics.reducer'

const createReducer = asyncReducers => combineReducers({
  topics: topicsReducer,
  ...asyncReducers
})

export default createReducer
