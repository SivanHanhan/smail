import React, { createContext, useState, useEffect } from 'react';
import { getMails } from '../ApiService';

const GlobalContext = createContext({
  mails: [],
  user: "",
  setMails: () => {},
  setUser: () => {},
});

const ContextProvider = ({ children }) => {
  const [mails, setMails] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const response = await getMails();
        const data = response.data;
        setMails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMails();
  }, []);

  return (
    <GlobalContext.Provider value={{ mails, user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { ContextProvider, GlobalContext };
