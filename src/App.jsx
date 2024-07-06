import { useState } from 'react'
import './App.css'
import Layout from './Layout'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'


function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>

      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
