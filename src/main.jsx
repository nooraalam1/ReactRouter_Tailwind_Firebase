import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='text-3xl font-semibold text-center mt-8'>Hello world! <br /> <span className='text-xl text-purple-600'>Made by Noor A Alam</span></div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
