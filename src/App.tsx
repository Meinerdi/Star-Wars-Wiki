import React from 'react'
import { Route, Switch } from 'react-router-dom'
import s from './App.module.scss'
import logo from './assets/images/logo.png'
import { Films } from './pages/Films/Films'
import { PeopleContainer } from './pages/People/People'
import { Planets } from './pages/Planets/Planets'
import { Species } from './pages/Species/Species'
import { Starships } from './pages/Starships/Starships'
import { Vehicles } from './pages/Vehicles/Vehicles'
import { MainHeader } from './stories/Header.stories'
import { MainSidebar } from './stories/Sidebar.stories'
import { PeopleDetailsContainer } from './pages/PeopleDetails/PeopleDetails'

const menuPages = [
  'People',
  'Species',
  'Vehicles',
  'Starships',
  'Planets',
  'Films',
]

const App = () => {
  return (
    <div className={s['app-wrapper']}>
      <div className={s['sub-wrapper']}>
        <MainHeader logo={logo} />
        <div className={s['content-wrapper']}>
          <MainSidebar list={menuPages} navLink />
          <div className={s.pages}>
            <Switch>
              <Route component={PeopleContainer} path="/people" exact />
              <Route component={PeopleDetailsContainer} path="/people/:id" />
              <Route component={Species} path="/species" />
              <Route component={Vehicles} path="/vehicles" />
              <Route component={Starships} path="/starships" />
              <Route component={Planets} path="/planets" />
              <Route component={Films} path="/films" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
