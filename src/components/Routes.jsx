import React from 'react';
import { Route, Switch,Redirect } from "react-router-dom";
import Register from '../components/Register'
import Login from '../components/Login'
import Post from '../components/Post'
import TaskersView from '../components/Tasker/TaskersView'
import TaskView from '../components/Task/TaskView'
import TaskerEditView from '../components/Tasker/TaskerEditView'
import Profile from "../components/Seeker/Profile"
import {loggedIn} from "../api/auth";
import Home from './Home'

export default () => ((
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Cleaning" component={TaskersView} />
        <Route exact path="/Task" component={TaskView} />
        <Route exact path="/Profile" component={Profile} />
        <ProtectedRoute exact path="/Post" component={Post} />
        <ProtectedRoute exact path="/tasker/new" component={TaskerEditView} />
    </Switch>
));

const ProtectedRoute = ({ component: ProtectedComponent, ...rest }) => {
  return <Route
    {...rest}
    render={props =>
      loggedIn() ? (
        <ProtectedComponent {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/Login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
}
