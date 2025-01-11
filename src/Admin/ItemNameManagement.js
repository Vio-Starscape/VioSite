import React, { useEffect } from "react";
import './admin.css';

function ItemNameManagement() {

    const getItems = () => {
        instance
            .get(`items`)
            .then((res) => {
                setItems(res.data);
            })
            .catch((err) => {
                console.error('Failed to get items:', err);
            });
    }

    return (
        <div className="rounded-xl w-4/5 bg-white shadow-xl">
            <h1 className="text-center text-4xl font-anta">Item Names</h1>
        </div>
    )
}

export default ItemNameManagement;