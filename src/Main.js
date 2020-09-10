import React from 'react'
import NewTask from './NewTask'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Details from './Details'

const Main = () => (
    <main className="App-main">
          <section className="col task-info">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/details/:taskid' component={Details}/>
            </Switch>
          </section>
          <NewTask />
      </main>
)
export default Main