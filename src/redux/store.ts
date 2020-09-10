import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { peopleReducer } from './reducers/peopleReducer'
import { speciesReducer } from './reducers/speciesReducer'
import { globalReducer } from './reducers/globalReducer'
import { vehiclesReducer } from './reducers/vehiclesReducer'
import { starshipsReducer } from './reducers/starshipsReducer'
import { planetsReducer } from './reducers/planetsReducer'
import { filmsReducer } from './reducers/filmsReducer'

const rootReducer = combineReducers({
  peopleReducer,
  speciesReducer,
  globalReducer,
  vehiclesReducer,
  starshipsReducer,
  planetsReducer,
  filmsReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)
