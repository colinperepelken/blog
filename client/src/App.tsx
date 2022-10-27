import React from 'react'
import Footer from './components/views/Footer'
import { Banner } from './components/views/banner/Banner'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import EditPost from './components/views/blog/EditArticle'
import SingleArticle from './components/views/blog/SingleArticle'
import Blog from './components/views/blog/Blog'

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
                            <Route exact path="/" component={Blog} />
                        </Switch>
                    </Router>
                </div>
                <Footer />
            </ParallaxProvider>
        </div>
    )
}

export default App
