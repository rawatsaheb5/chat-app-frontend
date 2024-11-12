import { createContext, useContext, useState } from "react";
import io from "socket.io-client";

const socketContext = createContext(null);
const socket = io("http://localhost:8000");
export const SocketProvider = ({ children }) => {
  
  const [allMessage, setAllMessage] = useState([]);

  return (
    <socketContext.Provider value={{ allMessage, setAllMessage, socket }}>
      {children}
    </socketContext.Provider>
  );
};

export const useSocket = () => {
  return useContext(socketContext);
};
