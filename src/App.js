import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TermsOfService, PrivacyPolicy } from './Legal';
import './main.css';
import Index from './FirstPage/Index';
import Callback from './Callback';
import Admin from './Admin/Admin';
import Terminal from './Terminal/Terminal';
import Page404 from './Page404';
import PageDesktopOnly from './PageDesktopOnly';
import ScraperIndex from './Scraper/ScraperIndex';
import axios from 'axios';

function DiscordRedirect() {
  useEffect(() => {
    window.location.href = 'https://discord.gg/9JsmDfJtAR';
  }, []);

  return null;
}

function App() {
  const location = useLocation();
  const [VioUser, SetVIOUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('vio-token');
    if (token) {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/auth/@me/permissions`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      }).then((res) => {
          if (res.status === 200) {
            SetVIOUser(res.data);
          }
      }).catch((err) => {
          console.error('Failed to get permissions:', err);
      });
    } else {
      SetVIOUser(null);
    }
  }, [location]);

  return (
      <Routes>
        <Route path="/" element={<Index VioUser={VioUser} />} />
        <Route path="/terminal" element={<Terminal VioUser={VioUser} />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/discord" element={<DiscordRedirect />} />
        <Route path="/discord/tos" element={<TermsOfService />} />
        <Route path="/discord/privacy" element={<PrivacyPolicy />} />
        {/* <Route path="/admin" element={<Admin VioUser={VioUser} />} /> */}
        <Route path="/scraper" element={<ScraperIndex VioUser={VioUser} />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
  );
}

export default App;
