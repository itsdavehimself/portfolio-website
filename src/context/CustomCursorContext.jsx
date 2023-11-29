import { createContext, useState } from 'react';

export const CustomCursorContext = createContext({
  type: 'default',
  setType: () => {},
});

export const CustomCursorContextProvider = ({ children }) => {
  const [type, setType] = useState('default');

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};
