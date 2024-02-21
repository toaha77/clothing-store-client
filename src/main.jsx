import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCratedRoute from './Router/Route'
import AuthProvider from './AuthProvider/Authprovider'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={myCratedRoute}></RouterProvider>

    </AuthProvider>
  </React.StrictMode>,
)
