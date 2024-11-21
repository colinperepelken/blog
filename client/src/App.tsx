import React from 'react'
import Footer from './components/views/footer/Footer'
import Banner from './components/views/banner/Banner'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import EditPost from './components/views/blog/EditArticle'
import SingleArticle from './components/views/blog/SingleArticle'
import Blog from './components/views/blog/Blog'
import Portfolio from './components/views/portfolio/Portfolio'
import { config } from './config'

const App = () => {
    return (
        <div className="App bg-slate-100">
            <Router>
                <Switch>
                    {config.isBlogEnabled && (
                        <>
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
                        </>
                    )}

                    <Route exact path="/" component={Portfolio} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
