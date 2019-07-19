import React from 'react';
import { BrowserRouter as Route,Redirect,withRouter} from "react-router-dom";
import {loggedIn} from "../api/auth";

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
export default withRouter(ProtectedRoute)