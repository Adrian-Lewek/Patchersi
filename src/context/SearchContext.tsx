import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

// Definiujemy, jakiego kształtu będą dane w naszym kontekście
interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

// Tworzymy kontekst z domyślnymi wartościami
export const SearchContext = createContext<SearchContextType>({
  searchTerm: '',
  setSearchTerm: () => {},
});

// Tworzymy "Dostawcę" (Provider), który będzie zarządzał stanem
export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};