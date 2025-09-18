import React, { useEffect, useState } from 'react'
import Navbar from '../components/LayoutComponents/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/LayoutComponents/Footer'
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import Spinner from '../../../common/components/Spinner';



export default function MainLayout() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500);
    return () => clearTimeout(timer);
  }, [location.pathname])
  return (

    <div>
      {isLoading && <Spinner />}
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1, padding: "20px" }}>
          <Outlet /> {/* UI sayfaları buraya gelecek */}
        </main>
        <Footer />
      </div>
    </div>
  )
}
