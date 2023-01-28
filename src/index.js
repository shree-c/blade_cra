import React from 'react'
import App from './routes/App'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import ErrorPage from './routes/error-page'
import Docs from './components/Docs'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import HomePageBody from './components/HomePageBody'


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
        element: <App />,
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
