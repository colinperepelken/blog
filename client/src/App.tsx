import React from 'react'
import Home from './components/screens/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SinglePost from './components/screens/SinglePost'
import Header from './components/Header'
import Footer from './components/Footer'
import EditPost from './components/screens/EditPost'

const App = () => {
    return (
        <div className="App">
            <Header />
            <div>
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/post/:id/view"
                            component={SinglePost}
                        />
                        <Route
                            exact
                            path="/post/:id/edit"
                            component={EditPost}
                        />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default App
