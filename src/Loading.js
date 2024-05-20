import React from 'react';
import './main.css'; // Import the CSS file for styling

const Loading = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center">
            <img className="logo animate-spin w-32 h-32" src="/android-chrome-512x512.png" alt="Loading logo" />
            <h1 className="text-4xl">Loading...</h1>
        </div>
    );
};

export default Loading;