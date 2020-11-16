import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { FilmsContainer } from '../pages/Films/Films'
import { FilmsDetailsContainer } from '../pages/FilmsDetails/FilmsDetails'
import { PeopleContainer } from '../pages/People/People'
import { PeopleDetailsContainer } from '../pages/PeopleDetails/PeopleDetails'
import { PlanetsContainer } from '../pages/Planets/Planets'
import { PlanetsDetailsContainer } from '../pages/PlanetsDetails/PlanetsDetails'
import { SpeciesContainer } from '../pages/Species/Species'
import { SpeciesDetailsContainer } from '../pages/SpeciesDetails/SpeciesDetails'
import { StarshipsContainer } from '../pages/Starships/Starships'
import { StarshipsDetailsContainer } from '../pages/StarshipsDetails/StarshipsDetails'
import { VehiclesContainer } from '../pages/Vehicles/Vehicles'
import { VehiclesDetailsContainer } from '../pages/VehiclesDetails/VehiclesDetails'
import { Favorites } from '../pages/Favorites/Favorites'

export const Routes = () => (
  <Switch>
    <Route component={PeopleContainer} path="/people" exact />
    <Route component={PeopleDetailsContainer} path="/people/:id" />
    <Route component={SpeciesContainer} path="/species" exact />
    <Route component={SpeciesDetailsContainer} path="/species/:id" />
    <Route component={VehiclesContainer} path="/vehicles" exact />
    <Route component={VehiclesDetailsContainer} path="/vehicles/:id" />
    <Route component={StarshipsContainer} path="/starships" exact />
    <Route component={StarshipsDetailsContainer} path="/starships/:id" />
    <Route component={PlanetsContainer} path="/planets" exact />
    <Route component={PlanetsDetailsContainer} path="/planets/:id" />
    <Route component={FilmsContainer} path="/films" exact />
    <Route component={FilmsDetailsContainer} path="/films/:id" />
    <Route component={Favorites} path="/favorites" />
  </Switch>
)
