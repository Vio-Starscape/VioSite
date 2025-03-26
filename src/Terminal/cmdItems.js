import React, {useEffect, useState, useContext} from 'react';
import { VioContext } from '../context';

function ItemContainer({ itemInfo }) {
    const { VioUser } = useContext(VioContext);

    if (!itemInfo) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-green-400 font-mono">No item information available.</p>
            </div>
        );
    }
    
    const renderListings = (list, type) => (
        <div className="w-full mb-6">
            <h3 className="text-green-300 font-bold uppercase mb-2">{type} Listings</h3>
            <div className="max-h-[40vh] overflow-y-auto border-l-2 pl-2 border-green-500">
                {list.length > 0 ? list.map((entry, index) => (
                    <pre key={index} className="text-green-400 font-mono text-sm mb-1">
{`${entry.vendor.displayName.padEnd(20)} | ${entry.amount.toLocaleString().padStart(6)} units | $${entry.price.toFixed(2)}`}
                    </pre>
                )) : (
                    <p className="text-green-400 font-mono">No listings available.</p>
                )}
            </div>
        </div>
    );

    return (
        <div className="bg-black text-green-400 font-mono rounded-lg p-6 shadow-inner w-full h-[80vh] overflow-hidden">
            <h2 className="text-green-300 text-2xl font-bold mb-4">== {itemInfo.name} ==</h2>
            <p className="mb-4">Scanned: {new Date(itemInfo.time_scanned).toLocaleString()}</p>
            <div className="flex flex-col md:flex-row gap-6">
                {renderListings(itemInfo.buy || [], 'Buy')}
                {renderListings(itemInfo.sell || [], 'Sell')}
            </div>
        </div>
    );
}

export default ItemContainer;