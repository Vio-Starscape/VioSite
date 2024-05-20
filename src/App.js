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
import Loading from './Loading';
import ScraperIndex from './Scraper/ScraperIndex';
import { instance } from './instance';

function DiscordRedirect() {
  useEffect(() => {
    window.location.href = 'https://discord.gg/9JsmDfJtAR';
  }, []);

  return null;
}

function App() {
  const [VioUser, SetVIOUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    instance
      .get('/auth/@me/permissions')
      .then((res) => {
        SetVIOUser(res.data);
        console.log('Got permissions:', res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Failed to get permissions:', err);
      });
  }, []);
  if (!isLoading){
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
            {/* <Route path="/admin" element={<Admin VioUser={VioUser} />} /> */}
            <Route path="/loading" element={<Loading />} />
            <Route path="/scraper" element={<ScraperIndex VioUser={VioUser} />} />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </VioContext.Provider>
    );
  } else {
    return (
      <Loading />
    );
  }
}

export default App;
