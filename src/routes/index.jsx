
import React from 'react';
import PathConstants from './PathConstants';

const Home = React.lazy(() => import('../pages/Home'));

const About = React.lazy(() => import('../pages/About'));

const Login = React.lazy(() => import('../pages/auth/Login'));

const Register = React.lazy(() => import('../pages/auth/Register'));

const routes = [
    {
        path: PathConstants.HOME,
        element: <Home />
    },
    {
        path: PathConstants.ABOUT,
        element: <About />
    },
    {
        path: PathConstants.LOGIN,
        element: <Login />
    },
    {
        path: PathConstants.REGISTER,
        element: <Register />
    }
];

export default routes;