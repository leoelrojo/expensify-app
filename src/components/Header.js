import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
<<<<<<< HEAD
        <h1>Expensify App</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
=======
        <h1>Portfolio App</h1>
        <NavLink to="/" activeClassName='is-active' exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName='is-active' exact={true}>Portfolio</NavLink>
        <NavLink to="/contact" activeClassName='is-active'>Contact</NavLink>
>>>>>>> d24604c3df50f3bbe23d64f1d743d82d44bb48ca
    </header>
);

export default Header;