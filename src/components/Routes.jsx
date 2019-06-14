import React from 'react';
import { BrowserRouter as  Route, Switch } from "react-router-dom";
import Task from './Task'
import Tasker from './Tasker'
// import Seeker from './Seeker'
import Home from './Home'
// import Routes from './Routes'
export default () => ((
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/task" component={Task} />
        <Route exact path="/tasker" component={Tasker} />
    </Switch>
    ));