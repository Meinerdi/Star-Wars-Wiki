import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ajaxReducer from './reducers/ajaxReducer'

const rootReducer = combineReducers({
  ajaxReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
