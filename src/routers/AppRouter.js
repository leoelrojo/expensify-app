import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Homepage from '../components/Homepage';
import Portfolio from '../components/Portfolio';
import PortfolioDetail from '../components/PortfolioDetail';
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path='/' exact={true} component={Homepage} />
            <Route path='/portfolio' exact={true }component={Portfolio} />
            <Route path='/portfolio/:id' component={PortfolioDetail} />
            <Route path='/contact' component={Contact} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;