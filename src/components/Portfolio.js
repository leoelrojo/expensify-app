import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <div>Checkout the following things I've done:</div>
        <Link to="/portfolio/1">Stuff 1</Link>
        <Link to="/portfolio/2">Stuff 2</Link>
    </div>
);

export default Portfolio;