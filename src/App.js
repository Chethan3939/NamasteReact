import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact'
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
// import Groceries from './components/Groceries';

const Groceries = lazy(()=> import('./components/Groceries'))

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path: '/about',
                element : <About />
            },
            {
                path: '/contact',
                element : <Contact />
            },
            {
                path:'/restaurantmenu/:id',
                element : <RestaurantMenu />

            },
            {
                path : '/groceries',
                element : <Suspense fallback={<h1>Loading....</h1>} ><Groceries /></Suspense>
            }
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);