import React, { useEffect, useState } from "react";
import { instance } from "../instance";
import './admin.css';

function ItemNameManagement() {
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        instance
            .get(`terminal/items`)
            .then((res) => {
                const sortedItems = res.data.sort((a, b) => a.localeCompare(b));
                setItems(sortedItems);
            })
            .catch((err) => {
                console.error('Failed to get items:', err);
            });
    }

    const postItemsList = () => {
        instance
            .post(`terminal/items`, selectedItems)
            .then((res) => {
                console.log('Successfully saved items');
            })
            .catch((err) => {
                console.error('Failed to save items:', err);
            });
    }

    const handleCheckboxChange = (item) => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.includes(item)
                ? prevSelectedItems.filter((i) => i !== item) // Remove if already selected
                : [...prevSelectedItems, item] // Add if not already selected
        );
    };

    const removeSelectedItems = () => {
        setItems(items.filter(item => !selectedItems.includes(item)));
        postItemsList();
        setSelectedItems([]);
    };

    return (
        <div className="rounded-xl w-4/5 bg-white shadow-xl p-5 mx-auto">
            <h1 className="text-center text-4xl font-anta mb-4">Item Names</h1>

            <div className="overflow-y-auto h-64 border rounded-md">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Select
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Item Name
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {items.length > 0 ? (
                            items.map((item) => (
                                <tr key={item}>
                                    <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="checkbox"
                                            id={`item-${item}`}
                                            checked={selectedItems.includes(item)}
                                            onChange={() => handleCheckboxChange(item)}
                                            className="mr-3"
                                        />
                                    </td>
                                    <td className="md:px-6 py-4 whitespace-nowrap">
                                        <label htmlFor={`item-${item}`} className="text-xs">
                                            {item}
                                        </label>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" className="text-center py-4">
                                    No items available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <button
                className="bg-red-500 w-auto hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={removeSelectedItems}
            >
                Remove
            </button>
        </div>
    )
}

export default ItemNameManagement;