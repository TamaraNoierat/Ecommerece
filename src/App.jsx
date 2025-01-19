import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AuthLayout from './layout/AuthLayout';
import DashboardLayout from './layout/Dashboard';
import Register from './pages/user/register/Register';
import Login from './pages/user/login/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
