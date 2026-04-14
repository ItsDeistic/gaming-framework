import React, { createContext, useContext } from 'react';
import { useFeatureStore } from '../store/featureStore';

const FrameworkContext = createContext(null);

export function FrameworkProvider({ children }) {
  const store = useFeatureStore();
  return (
    <FrameworkContext.Provider value={store}>
      {children}
    </FrameworkContext.Provider>
  );
}

export function useFramework() {
  const ctx = useContext(FrameworkContext);
  if (!ctx) throw new Error('useFramework must be used within FrameworkProvider');
  return ctx;
}

// HOC: only renders children if feature is enabled
export function FeatureGate({ feature, fallback = null, children }) {
  const { isEnabled } = useFramework();
  return isEnabled(feature) ? <>{children}</> : <>{fallback}</>;
}
