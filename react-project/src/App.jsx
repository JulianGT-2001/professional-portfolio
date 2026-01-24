import React from 'react';
import { CombinedProvider } from './Context';
import { AppContent } from './AppContent';

export default function App() {
  return (
    <>
      <CombinedProvider>
        <AppContent />
      </CombinedProvider>
    </>
  )
}
