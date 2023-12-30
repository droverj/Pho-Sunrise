import React, { createContext, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';

const SupabaseContext = createContext();

export const SupabaseProvider = ({ children }) => {
  const supabase = createClient('https://jbppixwnezcbhkyfbjpa.supabase.co', process.env.REACT_APP_SUPABASE_KEY);

  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
};