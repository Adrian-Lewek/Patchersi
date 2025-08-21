import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- Import
import App from './App.tsx';

import { SearchProvider } from './context/SearchContext'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/patchersi">
      <SearchProvider> {/* <-- Opakowujemy App w nasz provider */}
        <App />
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
);
