import React, { useEffect, useState, useContext } from 'react';
import { VioContext } from '../context';
import "./dark.css";

function DarkItemContainer({ itemInfo }) {
    const { VioUser } = useContext(VioContext);

    if (!itemInfo) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-green-400 font-mono">No item information available.</p>
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
        <div className="w-full lg:w-1/2 mb-4">
            <h3 className="text-green-300 font-bold uppercase mb-2">{type} Listings</h3>

            {/* Labels */}
            <div className="font-mono text-xs text-green-500 mb-1 px-1">
                <div className="flex">
                    <span className="w-40">User</span>
                    <span className="w-32 text-right hidden sm:inline">Amount (Units)</span>
                    <span className="w-32 text-right sm:hidden">Amt (U)</span>
                    <span className="w-24 text-right">Price</span>
                </div>
            </div>

            {/* Scrollable content */}
            <div className="lg:max-h-[55vh] overflow-y-auto bg-green-950/30 rounded-md p-2 border border-green-500">
                {list.length > 0 ? list.map((entry, index) => (
                    <div
                        key={index}
                        className="font-mono text-sm text-green-400 border-b border-dashed border-green-800 py-1 flex items-center gap-x-4"
                    >
                        {/* Vendor Name */}
                        <span className="w-40 truncate" title={entry.vendor?.displayName || 'Unknown'}>
                            {entry.vendor?.displayName || 'Unknown'}
                        </span>

                        {/* Amount */}
                        <span className="w-32 text-right">
                            {formatAmount(entry.amount)} <span className="hidden sm:inline">Units</span>
                            <span className="sm:hidden ">U</span>
                        </span>

                        {/* Price */}
                        <span className="w-24 text-right whitespace-nowrap">
                            {formatPrice(entry.price)} C
                        </span>
                    </div>
                )) : (
                    <p className="text-green-400 font-mono">No listings available.</p>
                )}
            </div>
        </div>
    );

    return (
        <div className="bg-black text-green-400 font-mono shadow-inner rounded-lg p-6 w-full flex flex-col lg:h-[85vh] overflow-hidden">
            <h2 className="text-2xl font-bold mb-2 text-green-300 font-anta">== {itemInfo.name} ==</h2>
            <p className="text-sm text-green-500 mb-4">Scanned: {new Date(itemInfo.time_scanned).toLocaleString()}</p>
            <div className="flex flex-col lg:flex-row gap-6 overflow-hidden">
                {renderListings(itemInfo.sell || [], 'Sell')}
                {renderListings(itemInfo.buy || [], 'Buy')}
            </div>
        </div>
    );
}

export default DarkItemContainer;