import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext"
import Home from './pages';
import SignupPage from "./pages/signup"
import SigninPage from './pages/signin';
import SearchPage from './pages/search';
import ProfilePage from './pages/profile';
import DetailsPage from './pages/details';
import FormPage from './pages/form';
import ForgotPasswordPage from './pages/forgotPassword';
import PrivateRoute from './components/PrivateRoute';
import UpdateProfilePage from './pages/updateProfile';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={SigninPage} exact />
          <Route path='/signup' component={SignupPage} exact />
          <PrivateRoute path='/profile' component={ProfilePage} exact />
          <PrivateRoute path='/search' component={SearchPage} exact />
          <Route path='/search/:id' component={DetailsPage} />
          <PrivateRoute path='/form' component={FormPage} />
          <Route path='/forgot-pass' component={ForgotPasswordPage} exact />
          <PrivateRoute path='/update-profile' component={UpdateProfilePage} exact />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
