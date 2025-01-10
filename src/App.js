import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TermsOfService, PrivacyPolicy } from './Legal';
import { VioContext } from './context';
import './main.css';
import Index from './FirstPage/Index';
import Callback from './Callback';
import Admin from './Admin/Admin';
import Terminal from './Terminal/Terminal';
import Page404 from './Page404';
import PageDesktopOnly from './PageDesktopOnly';
import ScraperIndex from './Scraper/ScraperIndex';
import Settings from './Settings/Settings';
import { instance } from './instance';

function DiscordRedirect() {
  useEffect(() => {
    window.location.href = 'https://discord.gg/9JsmDfJtAR';
  }, []);

  return null;
}

function App() {
  const [VioUser, SetVIOUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get('/auth/@me/permissions')
      .then((res) => {
        SetVIOUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to get permissions');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <VioContext.Provider value={{ VioUser, SetVIOUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index VioUser={VioUser} />} />
          <Route path="/terminal" element={<Terminal VioUser={VioUser} />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/discord" element={<DiscordRedirect />} />
          <Route path="/discord/tos" element={<TermsOfService />} />
          <Route path="/discord/privacy" element={<PrivacyPolicy />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin" element={<Admin VioUser={VioUser} />} />
          <Route path="/scraper" element={<ScraperIndex VioUser={VioUser} />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </VioContext.Provider>
  );
}

export default App;
