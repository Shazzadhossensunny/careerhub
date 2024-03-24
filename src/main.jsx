import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Statistics from './pages/Statistics/Statistics';
import AppliedJobs from './pages/AppliedJobs/AppliedJobs';
import Blogs from './pages/Blogs/Blogs';
import JobDetails from './components/JobDetails/JobDetails';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Statistics></Statistics>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,

      },
      {
        path: "/job/:id",
        element:<JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   <Toaster />
  </React.StrictMode>,
)
