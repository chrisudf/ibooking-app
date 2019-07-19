import React from 'react';
import { BrowserRouter as  Route, Switch,Redirect } from "react-router-dom";
import Register from '../components/Register'
import Login from '../components/Login'
import Post from '../components/Post'
import TaskersView from '../components/Tasker/TaskersView'
import TaskView from '../components/Task/TaskView'
import TaskerEditView from '../components/Tasker/TaskerEditView'
import Profile from "../components/Seeker/Profile"
import {loggedIn} from "../api/auth";
import ProtectedRoute from "./ProtectedRoute.js"
import Home from './Home'

export default () => ((
    <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/Post" component={Post} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Cleaning" component={TaskersView} />
        <ProtectedRoute exact path="/tasker/new" component={TaskerEditView} />
        <Route exact path="/Task" component={TaskView} />
        <Route exact path="/Profile" component={Profile} /> 
    </Switch>
));

// const ProtectedRoute = ({ component: ProtectedComponent, ...rest }) => {
//   return <Route
//     {...rest}
//     render={props =>
//       loggedIn() ? (
//         <ProtectedComponent {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: '/Login',
//             state: { from: props.location },
//           }}
//         />
//       )
//     }
//   />
// }
// export default withRouter(ProtectedRoute)