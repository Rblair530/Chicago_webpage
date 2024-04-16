import React, { useState } from 'react'
import NavBar from './componets/navbar'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './pages/Homepage'




function App(): React.ReactNode {
  return (
    /*The router is the webpage*/
    <Router>

      <NavBar/>

      {/**The routes are used for the different pages/url that can be accessed */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>


      </Routes>

    </Router>
  )
}

export default App
