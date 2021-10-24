import React from 'react'
import Home from './components/screens/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import SinglePost from './components/screens/SinglePost'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/post">
            <SinglePost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
