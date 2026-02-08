import React from 'react'
import Layout from './componets/Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from './pages/Contact.jsx'
import Menu from "./pages/Menu.jsx"
import PAgeNotFound from './pages/PAgeNotFound.jsx'
import Header from './componets/Layout/Header.jsx'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='*' element={<PAgeNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App