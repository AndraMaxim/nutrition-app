import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SearchPage from './pages/search';
import DetailsPage from './pages/details';
import FormPage from './pages/form';
// import ListPage from './pages/list';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/search' component={SearchPage} exact />
        <Route path='/search/:id' component={DetailsPage} />
        <Route path='/form' component={FormPage} />
        {/* <Route path='/list' component={ListPage} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
