import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { instance } from './instance';

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
    window.location.reload();
  } else {
    console.log('State match');
  }

  useEffect(() => {
    instance.post('/auth/register', { code })
      .then((res) => {
        if (res.status === 200) {
          console.log('Successfully logged in');
          localStorage.setItem('vio-token', res.data.token);
        } else {
          console.log('Failed to log in');
        }
        history('/');
        window.location.reload();
      })
      .catch((err) => {
        console.error('Failed to log in:', err);
        history('/');
        window.location.reload();
      });
  }, [code, history]);
  
  return null;
}

export default Callback;