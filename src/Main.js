import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Todo from './Todo'
import Details from './Details'

const Main = () => (
    <main className="App-main">
          <section className="col task-info">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/todo' component={Todo}/>
                <Route exact path='/details/:taskid' component={Details}/>
            </Switch>
          </section>

      </main>
)
export default Main