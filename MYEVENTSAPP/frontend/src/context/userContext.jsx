import { createContext, useState, useEffect } from 'react';
import apiClient from '../services/apiClient';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          const response = await apiClient.get(`/auth/users/${userId}`);
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
