import React from 'react'
import Navbar from '../components/LayoutComponents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/LayoutComponents/Footer'

export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 p-3">
        <Outlet /> {/* Buraya sayfalar gelecek */}
      </main>
      <Footer />
    </div>
  )
}
