import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth'
const PrivateRouter = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <div className='my-5'>
                <Spinner animation="border" variant="danger" />
            </div>
        )
    };
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login", state: { from: location }
                }}
            ></Redirect>

            }
        ></Route>
    );
};

export default PrivateRouter;
/* 
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';



const PrivateRoute = ({ children, ...rest }) => {
    const { user,loading } = useAuth();
if (loading) {
    return (
        <div className='my-5'>
            <Spinner animation="border" variant="danger" />
        </div>
    )
}
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login", state: { from: location }
                }}
            ></Redirect>

            }
        ></Route>
    );
};

export default PrivateRoute;
*/