import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
<<<<<<< HEAD
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
=======
import Header from '../components/Header';
import Homepage from '../components/Homepage';
import Portfolio from '../components/Portfolio';
import PortfolioDetail from '../components/PortfolioDetail';
import Contact from '../components/Contact';
>>>>>>> d24604c3df50f3bbe23d64f1d743d82d44bb48ca
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
<<<<<<< HEAD
            <Route path="/" exact={true} component={ExpenseDashboardPage}/>
            <Route path="/create" component={AddExpensePage}></Route>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}></Route>
            <Route component={NotFoundPage}></Route>
=======
            <Route path='/' exact={true} component={Homepage} />
            <Route path='/portfolio' exact={true }component={Portfolio} />
            <Route path='/portfolio/:id' component={PortfolioDetail} />
            <Route path='/contact' component={Contact} />
            <Route component={NotFoundPage} />
>>>>>>> d24604c3df50f3bbe23d64f1d743d82d44bb48ca
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;