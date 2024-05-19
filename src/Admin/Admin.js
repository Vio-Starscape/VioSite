import React, { useEffect } from "react";
import './admin.css';
import PermissionManagement from "./Permissions";
import ItemNameManagement from "./ItemNameManagement";

function Admin() {

    useEffect(() => {
        const token = localStorage.getItem('vio-token');
        if (!token) {
            window.location.href = '/';
        }
    }, []);

    return (
        <div>
            <section className="h-screen">
                <div className="sticky top-0 bg-white z-50 text-center rounded-b-3xl shadow-md p-1">
                    <h1 className="text-5xl font-anta">Admin</h1>
                </div>
                <div className="flex flex-wrap justify-center m-10 gap-4">
                    <PermissionManagement />
                    <ItemNameManagement />
                    <ItemNameManagement />
                </div>
            </section>
        </div>
    )
}

export default Admin;