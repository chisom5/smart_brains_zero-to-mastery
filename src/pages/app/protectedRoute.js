import React from "react";
import { Route, Redirect } from "react-router-dom";

export const RouteLogin = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const token = localStorage.getItem("ActiveUser-SB");
  const isSignedIn = token ? true : false;

  return (
    <Route
      {...rest}
      render={props =>
        !isSignedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/detect", state: { from: props.location } }}
          />
        )
      }
    />
  );
};


export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("ActiveUser-SB");
  const isSignedIn = token ? true : false;

  return (
    <Route
      {...rest}
      render={props =>
        isSignedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

