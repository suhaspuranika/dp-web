import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import '../App.css'

const Layout = () => (
  <div className="app">
    <Navbar />
    <main className="page-content">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default Layout

