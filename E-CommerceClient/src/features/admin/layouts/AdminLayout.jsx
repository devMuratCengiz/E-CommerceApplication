import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AdminNavbar from "../components/LayoutComponents/Navbar";
import Footer from '../components/LayoutComponents/Footer';
import Spinner from '../../../common/components/Spinner';
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.css";

function AdminLayout() {
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
                <AdminNavbar />
                <main style={{ flex: 1, padding: "20px" }}>
                    <Outlet /> {/* Admin sayfaları buraya gelecek */}
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default AdminLayout