import React from 'react'
import Navbar from '../components/LayoutComponents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/LayoutComponents/Footer'
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.css";


export default function MainLayout() {
  alertify.set("notifier", "position", "top-right");
  alertify.success("test");
  return (

    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet /> {/* UI sayfaları buraya gelecek */}
      </main>
      <Footer />
    </div>
  )
}
