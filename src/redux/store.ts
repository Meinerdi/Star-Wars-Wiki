import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { peopleReducer } from './reducers/peopleReducer'
import { speciesReducer } from './reducers/speciesReducer'
import { globalReducer } from './reducers/globalReducer'

const rootReducer = combineReducers({
  peopleReducer,
  speciesReducer,
  globalReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store
