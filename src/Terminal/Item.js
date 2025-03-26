import React, {useEffect, useState, useContext} from 'react';
import { VioContext } from '../context';

function ItemContainer({ itemInfo }) {
    const { VioUser } = useContext(VioContext);

    if (!itemInfo) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-gray-500 font-mono">No item information available.</p>
            </div>
        );
    }

    const formatAmount = (amount) => {
        if (amount >= 1_000_000) return (amount / 1_000_000).toFixed(1) + 'M';
        if (amount >= 1_000) return (amount / 1_000).toFixed(1) + 'K';
        return amount.toString();
    };

    const formatPrice = (price) => {
        return price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const renderListings = (list, type) => (
        <div className="w-full lg:w-1/2">
            <h3 className="text-gray-700 font-semibold uppercase mb-2">{type} Listings</h3>

            {/* Labels */}
            <div className="font-mono text-xs text-gray-500 mb-1 px-1">
                <div className="flex">
                    <span className="w-40">User</span>
                    <span className="w-32 text-right hidden sm:inline">Amount (Units)</span>
                    <span className="w-32 text-right sm:hidden">Amt (U)</span>
                    <span className="w-24 text-right">Price</span>
                </div>
            </div>

            {/* Scrollable content */}
            <div className="lg:max-h-[55vh] overflow-y-auto bg-gray-100 rounded-md p-2 border border-gray-300">
                {list.length > 0 ? list.map((entry, index) => (
                    <div
                    key={index}
                    className="font-mono text-sm text-gray-800 border-b border-dashed border-gray-300 py-1 flex items-center gap-x-4"
                >
                    {/* Vendor Name */}
                    <span className="w-40 truncate" title={entry.vendor.displayName}>
                        {entry.vendor.displayName}
                    </span>
                
                    {/* Amount */}
                    <span className="w-32 text-right">
                            {formatAmount(entry.amount)} <span className="hidden sm:inline">Units</span>
                            <span className="sm:hidden">U</span>
                        </span>
                
                    {/* Price */}
                    <span className="w-24 text-right">
                        {formatPrice(entry.price)} C
                    </span>
                </div>
                
                )) : (
                    <p className="text-gray-500 font-mono">No listings available.</p>
                )}
            </div>
        </div>
    );

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full flex flex-col lg:h-[85vh]">
            <h2 className="text-2xl font-bold mb-2 font-anta">Item: {itemInfo.name}</h2>
            <p className="text-sm text-gray-500 mb-4">Last scanned: {new Date(itemInfo.time_scanned).toLocaleString()}</p>
            <div className="flex flex-col lg:flex-row gap-6 overflow-hidden">
                {renderListings(itemInfo.buy || [], 'Buy')}
                {renderListings(itemInfo.sell || [], 'Sell')}
            </div>
        </div>
    );
}

export default ItemContainer;