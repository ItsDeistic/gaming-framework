import React, { createContext, useContext, useState } from 'react';

const FrameworkContext = createContext(null);

const defaultEnabledFeatures = {
  profile: [0,1,2,3,4,5,6,7,8,9],
  social: [0,1,2,3,4,5,6,7,8,9],
  gaming: [0,1,2,3,4,5,6,7,8,9],
  playerCard: [0,1,2,3,4,5,6,7,8,9],
  technical: [0,1,2,3,4,5,6,7,8,9],
  community: [0,1,2,3,4,5,6,7,8,9],
  customization: [0,1,2,3,4,5,6,7,8,9],
  engagement: [0,1,2,3,4,5,6,7,8,9],
  analytics: [0,1,2,3,4,5,6,7,8,9],
  additional: [0,1,2,3,4,5,6,7,8,9]
};

export function FrameworkProvider({ children }) {
  const [enabledFeatures, setEnabledFeatures] = useState(() => {
    try {
      const stored = localStorage.getItem('enabledFeatures');
      return stored ? JSON.parse(stored) : defaultEnabledFeatures;
    } catch { return defaultEnabledFeatures; }
  });

  const [theme, setTheme] = useState('dark');
  const [user, setUser] = useState({
    id: '1', username: 'Player1', rank: 'Gold III',
    avatar: null, level: 42, xp: 8400, xpNeeded: 10000
  });

  const toggleFeature = (category, index) => {
    setEnabledFeatures(prev => {
      const updated = { ...prev };
      const arr = [...(updated[category] || [])];
      const pos = arr.indexOf(index);
      if (pos === -1) arr.push(index); else arr.splice(pos, 1);
      updated[category] = arr;
      localStorage.setItem('enabledFeatures', JSON.stringify(updated));
      return updated;
    });
  };

  const isFeatureEnabled = (category, index) =>
    (enabledFeatures[category] || []).includes(index);

  return (
    <FrameworkContext.Provider value={{
      enabledFeatures, toggleFeature, isFeatureEnabled,
      theme, setTheme, user, setUser
    }}>
      {children}
    </FrameworkContext.Provider>
  );
}

export function useFramework() {
  const ctx = useContext(FrameworkContext);
  if (!ctx) throw new Error('useFramework must be used within FrameworkProvider');
  return ctx;
}
