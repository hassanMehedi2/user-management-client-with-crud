import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddUser from './components/AddUser.jsx';
import UpdateUser from './components/UpdateUser.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=>fetch('https://user-management-server-with-crud.vercel.app/user')
      },
      {
        path: "/addUser",
        element: <AddUser></AddUser>,
      },
      {
        path: "/update/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({params}) => fetch(`https://user-management-server-with-crud.vercel.app/user/${params.id}`)
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
