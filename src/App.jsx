import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import PlatformResults from './Components/PlatformsResults/PlatformResults'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import PlatformDetails from './pages/PlatformDetails/PlatformDetails'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<PlatformResults />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='/:id' element={<PlatformDetails />} />
    </Route>
  )
)



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
