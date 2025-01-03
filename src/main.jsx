import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import CreateTrip from './create-trip/CreateTrip.jsx'
import Header from './components/custom/Header'
import { Toaster } from 'sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view-trip/[tripId]/Viewtrip'
import MyTrips from './my-trips/MyTrips'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  }
  ,
  {
    path:'/create-trip',
    element:<CreateTrip></CreateTrip>
  }
  ,
  {
    path:'/view-trip/:tripId',
    element:<Viewtrip></Viewtrip>
  }
  ,
  {
    path:'my-trips',
    element:<MyTrips/>
  }
]
  
)
createRoot(document.getElementById('root')).render(

  <StrictMode>
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
  <Header></Header>
  <Toaster></Toaster>
  <RouterProvider router={router}>

  </RouterProvider>
  </GoogleOAuthProvider>
  </StrictMode>,
)
