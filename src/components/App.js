import React from 'react';
import Home from './Home';
import Food from './Food';
import Bmi from './Bmi';
import { Router } from '@reach/router';

import { GlobalStyle } from './styles/GlobalStyle';


const App = () => (
        <>
            <Router>
                <Home path="/" />
                    <Bmi path="/components/Bmi" />
                    <Food path="/components/Food" />
            </Router>
            <GlobalStyle />
        </>
);

export default App;
