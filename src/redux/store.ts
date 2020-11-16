import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { favoritesReducer } from './reducers/favoritesReducer'
import { filmsReducer } from './reducers/filmsReducer'
import { globalReducer } from './reducers/globalReducer'
import { peopleReducer } from './reducers/peopleReducer'
import { planetsReducer } from './reducers/planetsReducer'
import { speciesReducer } from './reducers/speciesReducer'
import { starshipsReducer } from './reducers/starshipsReducer'
import { thumbnailsReducer } from './reducers/thumbnailsReducer'
import { vehiclesReducer } from './reducers/vehiclesReducer'

const rootReducer = combineReducers({
  peopleReducer,
  speciesReducer,
  globalReducer,
  vehiclesReducer,
  starshipsReducer,
  planetsReducer,
  filmsReducer,
  thumbnailsReducer,
  favoritesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)
