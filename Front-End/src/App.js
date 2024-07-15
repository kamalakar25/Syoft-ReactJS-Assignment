
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import signup from './components/signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={signup} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/" component={signup} />
            </Switch>
        </Router>
    );
};

export default App;
