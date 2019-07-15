import React from 'react';
import { BrowserRouter as  Route, Switch } from "react-router-dom";
import Register from '../components/Register'
import Login from '../components/Login'
import Post from '../components/Post'
import Cleaning from './Cleaning'
import TaskersView from '../components/Tasker/TaskersView'

import Home from './Home'

export default () => ((
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Post" component={Post} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Cleaning" component={TaskersView} />
    </Switch>
    ));