import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

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

CustomCursorContextProvider.propTypes = {
  children: PropTypes.element,
};
