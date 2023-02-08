import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import ErrorPage from './routes/error-page'
import Docs from './components/Docs'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import HomePageBody from './components/HomePageBody'
import Mirror from './components/Mirror'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePageBody />,
        errorElement: <ErrorPage />
      },
      {
        path: '/docs',
        element: <Docs />,
        errorElement: <ErrorPage />
      },
      {
        path: "/try",
        element: <Mirror />,
        errorElement: <ErrorPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
