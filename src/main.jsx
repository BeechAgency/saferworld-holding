import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './fonts.css'
import './index.css'
import Acfid from './Acfid.jsx'
import Error from './Error.jsx'
import HFF from './HFF.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/acfid",
    element: <Acfid />,
  },
  {
    path: "/hff",
    element: <HFF />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
