import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';
import Index from './routes/Index.jsx';
import Cabinet from './components/Cabinet.jsx';
import Cart from './components/Cart.jsx';
import ErrorPage from './routes/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
    ]
  },
  {
    path: 'index',
    element: <Index />,
    children: [
      {
        path: 'cabinet',
        element: <Cabinet />
      },
      {
        path: 'cart',
        element: <Cart />
      },
    ]
  }
  // {
  //   path: '/home',
  //   element: <Home />,
  // },
  // {
  //   path: '/about',
  //   element: <About />,
  // },
  // {
  //   path: '/contacts',
  //   element: <Contacts />,
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
