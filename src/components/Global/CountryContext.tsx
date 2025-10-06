"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Country {
  name: string;
  state: string;
}

interface CountryContextType {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};

interface CountryProviderProps {
  children: ReactNode;
}

export const CountryProvider: React.FC<CountryProviderProps> = ({ children }) => {
  const [selectedCountry, setSelectedCountryState] = useState<Country>({
    name: "Nigeria",
    state: "Lagos"
  });

  // Initialize from localStorage on mount
  useEffect(() => {
    const savedCountry = localStorage.getItem('whipcare-selected-country');
    if (savedCountry) {
      try {
        const parsedCountry = JSON.parse(savedCountry);
        setSelectedCountryState(parsedCountry);
      } catch (error) {
        console.error('Error parsing saved country from localStorage:', error);
        // Keep default if parsing fails
      }
    }
  }, []);

  const setSelectedCountry = (country: Country) => {
    setSelectedCountryState(country);
    // Save to localStorage
    localStorage.setItem('whipcare-selected-country', JSON.stringify(country));
  };

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
