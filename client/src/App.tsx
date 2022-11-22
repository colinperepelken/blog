import React from 'react'
import Footer from './components/views/Footer'
import Banner from './components/views/banner/Banner'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import EditPost from './components/views/blog/EditArticle'
import SingleArticle from './components/views/blog/SingleArticle'
import Blog from './components/views/blog/Blog'
import Portfolio from './components/views/portfolio/Portfolio'

const App = () => {
    return (
        <div className="App bg-black text-white">
            <Router>
                <ParallaxProvider>
                    <Banner />
                    <div className="center bg-black pt-9">
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
                            <Route exact path="/blog" component={Blog} />
                            <Route exact path="/" component={Portfolio} />
                        </Switch>
                    </div>
                    <Footer />
                </ParallaxProvider>
            </Router>
        </div>
    )
}

export default App
