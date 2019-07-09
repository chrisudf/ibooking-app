import React from 'react';
import { BrowserRouter as  Route, Switch } from "react-router-dom";
import Register from './Register'
import Tasker from '../Tasker'
import Home from './Home'
export default () => ((
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/tasker" component={Tasker} />
    </Switch>
    ));