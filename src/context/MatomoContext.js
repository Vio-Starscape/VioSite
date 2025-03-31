"use client";

import { MatomoProvider } from '@datapunt/matomo-tracker-react';
import { matomo } from '@/lib/matomo';

export default function MatomoWrapper({ children }) {
  return (
    <MatomoProvider value={matomo}>
      {children}
    </MatomoProvider>
  );
}