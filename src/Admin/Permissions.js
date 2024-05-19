import React, { useEffect, useState } from "react";
import './admin.css';
import axios from "axios";

function PermissionManagement() {
    const [permissions, setPermissions] = useState({});

    return (
        <div className="rounded-xl w-4/5 bg-white shadow-xl">
            <h1 className="text-center text-4xl font-anta">Permissions</h1>

            <div className="grid gap-10 p-5">
                <div className="m-auto lg1000:w-1/2">
                    <input 
                        type="text" 
                        className="rounded-md border-2 shadow w-full p-2" 
                        placeholder="User ID"
                        onChange={(e) => {
                            const filteredValue = e.target.value.replace(/\D/g, '');
                            e.target.value = filteredValue;
                        }}
                    />
                </div>
                <div className="m-auto">
                    <div className="flex items-center gap-x-2">
                        <input type="checkbox" className="rounded-md p-2 left-0" placeholder="Permission"/>
                        <p className="right-0">Undercut</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input type="checkbox" className="rounded-md p-2 left-0" placeholder="Permission"/>
                        <p className="right-0">Evaluation</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input type="checkbox" className="rounded-md p-2 left-0" placeholder="Permission"/>
                        <p className="right-0">Poop</p>
                    </div>
                </div>
            </div>
            <div className="flex md650:flex-wrap align-middle justify-center gap-x-2 p-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Load Permissions</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Permissions</button>
            </div>
        </div>
    )
}

export default PermissionManagement;