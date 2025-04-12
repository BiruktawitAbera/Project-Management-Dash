'use client';

import { createContext, useContext, useState } from 'react';

// Define the available roles
const AVAILABLE_ROLES = ['manager', 'team', 'client'];

// Create a Context
const RoleContext = createContext(null);

// Custom hook to access role and setter
export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};

// Provider component to wrap your app
export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState('manager'); // Default role

  const switchRole = (newRole) => {
    if (AVAILABLE_ROLES.includes(newRole)) {
      setRole(newRole);
    } else {
      console.warn(`Invalid role: ${newRole}`);
    }
  };

  return (
    <RoleContext.Provider value={{ role, setRole: switchRole }}>
      {children}
    </RoleContext.Provider>
  );
};
