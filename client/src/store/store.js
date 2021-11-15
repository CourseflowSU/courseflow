import React from 'react';

const Store = React.createContext();
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({children}) => {
  const val = "I am from store";

  return(
    <Store.Provider value={{val}}>{children}</Store.Provider>
  );
};