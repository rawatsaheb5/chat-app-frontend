import { createContext, useContext, useState } from "react";

const selectUserContext = createContext(null);

export const SelectUserProvider = ({ children }) => {
  
  const [selectedUserToChat, setSelectedUserToChat] = useState({
    _id: "",
    name: "",
  });

  return (
    <selectUserContext.Provider
      value={{
        selectedUserToChat,
        setSelectedUserToChat,
        
      }}
    >
      {children}
    </selectUserContext.Provider>
  );
};

export const useSelectUserToChat = () => {
  return useContext(selectUserContext);
};
