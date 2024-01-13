
import React from 'react';
import PathConstants from './PathConstants';

const Home = React.lazy(() => import('../pages/Home'));

const About = React.lazy(() => import('../pages/About'));

const Login = React.lazy(() => import('../pages/auth/Login'));

const Register = React.lazy(() => import('../pages/auth/Register'));

const Blog = React.lazy(() => import('../pages/blog/Blogs'));

const Listings = React.lazy(() => import('../pages/properties/index'));

const Property = React.lazy(() => import('../pages/properties/Property'));

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
    },
    {
        path: PathConstants.BLOG,
        element: <Blog />
    },
    {
        path: PathConstants.LISTING,
        element: <Listings />
    },
    {
        path: PathConstants.PROPERTY,
        element: <Property />
    }
];

export default routes;