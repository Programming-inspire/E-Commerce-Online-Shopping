// UserContext.js
import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const initialState = {
  name: '',
  email: '',
  phone: '',
  profilePicture: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, initialState);

  const updateUser = (userData) => {
    dispatch({ type: 'UPDATE_USER', payload: userData });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
