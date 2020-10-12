import React from 'react';
import Home from './Home';
import Food from './Food';
import Profile from './Profile';
import { Router } from '@reach/router';

import { GlobalStyle } from './styles/GlobalStyle';


const App = () => (
        <>
            <Router>
                <Home path="/" />
                    <Profile path="/components/Profile" />
                    <Food path="/components/Food" />
            </Router>
            <GlobalStyle />
        </>
);

export default App;
