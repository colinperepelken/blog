import React from 'react'
import Footer from './components/Footer'
import { Banner } from './components/Banner'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import EditPost from './components/screens/EditArticle'
import Home from './components/screens/Home'
import SingleArticle from './components/screens/SingleArticle'

const App = () => {
    return (
        <div className="App bg-slate-800 text-white">
            <ParallaxProvider>
                <Banner />
                <div className="center h-full bg-black pt-9">
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
            </ParallaxProvider>
        </div>
    )
}

export default App
