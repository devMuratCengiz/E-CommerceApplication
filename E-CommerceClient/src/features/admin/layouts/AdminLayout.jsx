import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from "../components/LayoutComponents/Navbar";
import Footer from '../components/LayoutComponents/Footer';

function AdminLayout() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <AdminNavbar />
            <main style={{ flex: 1, padding: "20px" }}>
                <Outlet /> {/* Admin sayfaları buraya gelecek */}
            </main>
            <Footer />
        </div>
    )
}

export default AdminLayout