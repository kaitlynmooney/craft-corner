import { createContext, useContext, useState } from 'react';

const UserResponsesContext = createContext();

export const useUserResponses = () => useContext(UserResponsesContext);

export const UserResponsesProvider = ({ children }) => {
  const [userResponses, setUserResponses] = useState([]);

  return (
    <UserResponsesContext.Provider value={{ userResponses, setUserResponses }}>
      {children}
    </UserResponsesContext.Provider>
  );
};

export default UserResponsesContext;