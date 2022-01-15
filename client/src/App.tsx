import React from 'react'
import Home from './components/screens/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SingleArticle from './components/screens/SingleArticle'
import Header from './components/Header'
import Footer from './components/Footer'
import EditPost from './components/screens/EditArticle'

const App = () => {
    return (
        <div className="App">
            <Header />
            <div>
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/article/:id/view"
                            component={SingleArticle}
                        />
                        <Route
                            exact
                            path="/article/:id/edit"
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
