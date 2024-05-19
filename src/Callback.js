import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import axios from 'axios';

function Callback() {
  const location = useLocation();
  const history = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  const storedState = localStorage.getItem('discord-oauth2-state');
  if (state !== storedState) {
    console.error('State mismatch');
    history('/');
  } else {
    console.log('State match');
  }

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`, { code })
      .then((res) => {
        if (res.status === 200) {
          console.log('Successfully registered');
          localStorage.setItem('vio-token', res.data.token);
        } else {
          console.log('Failed to register');
        }
        history('/');
      })
      .catch((err) => {
        console.error('Failed to register:', err);
      });
  }, [code, history]);
  
  return null;
}

export default Callback;