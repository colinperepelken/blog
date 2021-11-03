import React from 'react'
import Home from './components/screens/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import SinglePost from './components/screens/SinglePost'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/post/:id" component={SinglePost}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
