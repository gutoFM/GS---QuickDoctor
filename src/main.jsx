import {} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,

    children: [
      { path: '/', element: <Home />},
      { path: '/home', element: <Home />},
      { path: '/login', element: <Login />},
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
