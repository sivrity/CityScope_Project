import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import HomePage from './components/HomePage';


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'
import ProfileDetail from './components/ProfileDetail';
import Schedule from './components/Schedule';
import Checkout from './components/Checkout';

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path : '/home',
        element : <AuthorizeUser><HomePage></HomePage></AuthorizeUser>
    },
    {
        path : '/detail',
        element : <AuthorizeUser><ProfileDetail></ProfileDetail></AuthorizeUser>
    },
    {
        path : '/schedule',
        element : <AuthorizeUser><Schedule></Schedule></AuthorizeUser>
    },
    {
        path : '/checkout',
        element : <AuthorizeUser><Checkout></Checkout></AuthorizeUser>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
