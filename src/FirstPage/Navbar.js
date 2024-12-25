import { useState, useEffect } from 'react';
import './index.css';
import DiscordLogin from '../Login';

function logOut() {
    localStorage.removeItem('vio-token');
    window.location.reload();
}

function Navbar({VioUser}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono z-10" role="navigation">
                <a href="/" className="pl-8 font-anta text-3xl">Vio</a>
                <div className="px-4 cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
                <div className={`md:block right-0 pr-8 absolute top-full md:top-auto bg-white z-10${isOpen ? 'block max-h-screen opacity-100' : 'hidden md:block max-h-0 md:max-h-screen opacity-0 md:opacity-100'} transition-all`}>
                    <a href="https://api.vio.er-ic.ca" target="_blank" rel="noopener noreferrer" className="p-4 block md:inline hover:text-gray-500">API</a>
                    <a href="/discord" className="p-4 block md:inline hover:text-gray-500">Join Discord</a>
                    {/* {VioUser && VioUser.evaluation ? <a href="/evaluation" className="p-4 block md:inline hover:text-gray-500">Evaluation</a> : null} */}
                    {VioUser && VioUser.scraper ? <a href="/scraper" className="p-4 block md:inline hover:text-gray-500">Scraper</a> : null}
                    {VioUser && VioUser.admin ? <a href="/admin" className="p-4 block md:inline hover:text-gray-500">Admin</a> : null}
                    {!VioUser ? <DiscordLogin redirect_uri={`${window.location.protocol}//${window.location.host}/callback`}/> : <a href="/" onClick={logOut} className="p-4 block md:inline hover:text-gray-500">Logout</a>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;