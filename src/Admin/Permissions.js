import React, { useEffect, useState,} from "react";
import './admin.css';
import { instance } from "../instance";

function PermissionManagement() {
    const [permissions, setPermissions] = useState({"evaluation": false, "undercut": false});
    const [userId, setUserId] = useState('');


    const loadPermissions = () => {
        instance
            .get(`user/permissions/${userId}`)
            .then((res) => {
                setPermissions(res.data);
            })
            .catch((err) => {
                console.error('Failed to get permissions:', err);
            });
    }

    const savePermissions = () => {
        instance
            .post(`user/permissions/${userId}`, permissions)
            .then((res) => {
                console.log('Successfully saved permissions');
            })
            .catch((err) => {
                console.error('Failed to save permissions:', err);
            });
    }

    return (
        <div className="rounded-xl bg650:w-4/5 bg-white shadow-xl">
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
                            setUserId(filteredValue);
                        }}
                    />
                </div>
                <div className="m-auto">
                    <div className="flex items-center gap-x-2">
                        <input 
                            type="checkbox" 
                            className="rounded-md p-2 left-0" 
                            placeholder="Permission" 
                            checked={permissions.undercut}
                            onChange={(e) => setPermissions({...permissions, undercut: e.target.checked})}
                        />
                        <p className="right-0">Undercut</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input 
                            type="checkbox" 
                            className="rounded-md p-2 left-0" 
                            placeholder="Permission" 
                            checked={permissions.evaluation}
                            onChange={(e) => setPermissions({...permissions, evaluation: e.target.checked})}
                        />
                        <p className="right-0">Evaluation</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-y-2 align-middle justify-center gap-x-2 p-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={loadPermissions}>Load Permissions</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={savePermissions}>Save Permissions</button>
            </div>
        </div>
    )
}

export default PermissionManagement;