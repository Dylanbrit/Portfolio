import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import NotFound from '../components/NotFound'
import Header from '../components/Header'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import ItemOne from '../components/ItemOne'
import ItemTwo from '../components/ItemTwo'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/portfolio" component={Portfolio} exact={true} />
                <Route path="/contact" component={Contact} exact={true} />
                <Route path="/portfolio/:id" component={ItemOne} exact={true} />
                <Route path="/portfolio/:id" component={ItemTwo} exact={true} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter