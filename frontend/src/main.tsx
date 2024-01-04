import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import Master from './master/Master.tsx'
import Slave from './slave/Slave.tsx'
import Masterzus from './Zus/Masterzus.tsx'
import Slavezus from './Zus/Slavezus.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Render App component at root
  },
  {
    path: '/master',
    element: <Masterzus />
  },
  {
    path: '/slave',
    element: <Slavezus />
  }
  // Add more routes here as needed
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
