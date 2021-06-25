import React, { useContext } from 'react';
import { Route,Redirect } from 'react-router-dom';
import { ContextUser } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const {value1} = useContext(ContextUser)
    const [loggedInUser,setLoggedInUser] = value1
    return (
        <Route
        {...rest}
        render={({ location }) =>
          (loggedInUser.email || sessionStorage.getItem('token'))? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;