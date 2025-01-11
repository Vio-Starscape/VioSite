import React, { useEffect, useContext } from "react";
import './admin.css';
import PermissionManagement from "./Permissions";
import ItemNameManagement from "./ItemNameManagement";
import { VioContext } from "../context";

function Admin() {

    const { VioUser } = useContext(VioContext);

    useEffect(() => {
        if (!(VioUser && VioUser.admin)){
            console.error('User is not an admin');
            window.location.href = '/';
        }
    }, [VioUser]);

    return (
        <div>
            <section className="h-screen">
                <div className="sticky top-0 bg-white z-50 text-center rounded-b-3xl shadow-md p-1">
                    <h1 className="text-5xl font-anta">Admin</h1>
                </div>
                <div className="flex flex-wrap justify-center m-10 gap-4">
                    <PermissionManagement />
                    <ItemNameManagement />
                </div>
            </section>
        </div>
    )
}

export default Admin;