import React from 'react';
import { BrowserRouter as  Route, Switch } from "react-router-dom";
import Register from '../components/Register'
import Task from '../components/Task'
import Home from './Home'
export default () => ((
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Task" component={Task} />
        {/* <Route exact path="/tasker" component={Tasker} /> */}
    </Switch>
    ));