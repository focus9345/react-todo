import React from 'react'
import NewTask from './NewTask'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'

const Main = () => (
    <main className="App-main">
          <section className="col">
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
          </section>
          <NewTask />
      </main>
)
export default Main