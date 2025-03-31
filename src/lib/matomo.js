import { createInstance } from '@datapunt/matomo-tracker-react';

export const matomo = createInstance({
  urlBase: 'https://matomo.er-ic.ca/',
  siteId: process.env.NODE_ENV === 'production' ? 3 : 4,
  linkTracking: true,
  configurations: {
    disableCookies: true,
    setSecureCookie: process.env.NODE_ENV === 'production' ,
    setRequestMethod: 'POST',
  },
});