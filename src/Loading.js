import React from 'react';
import './main.css'; // Import the CSS file for styling

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <img className="logo animate-spin w-32 h-32" src="/android-chrome-512x512.png" alt="Loading logo" />
        </div>
    );
};

export default Loading;