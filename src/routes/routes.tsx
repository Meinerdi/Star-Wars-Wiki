import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Films } from '../pages/Films/Films'
import { PeopleContainer } from '../pages/People/People'
import { PeopleDetailsContainer } from '../pages/PeopleDetails/PeopleDetails'
import { Planets } from '../pages/Planets/Planets'
import { SpeciesContainer } from '../pages/Species/Species'
import { Starships } from '../pages/Starships/Starships'
import { Vehicles } from '../pages/Vehicles/Vehicles'

export const Routes = () => (
  <Switch>
    <Route component={PeopleContainer} path="/people" exact />
    <Route component={PeopleDetailsContainer} path="/people/:id" />
    <Route component={SpeciesContainer} path="/species" />
    <Route component={Vehicles} path="/vehicles" />
    <Route component={Starships} path="/starships" />
    <Route component={Planets} path="/planets" />
    <Route component={Films} path="/films" />
  </Switch>
)
