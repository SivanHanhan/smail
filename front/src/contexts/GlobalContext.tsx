import React, { createContext, useState, useEffect } from 'react';
import { getMails, getMailsOfUser } from '../ApiService';

const GlobalContext = createContext({
  mails: [],
  user: "",
  setMails: () => {},
  setUser: (user: string) => {},
});

const ContextProvider = ({ children }) => {
  const [mails, setMails] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const response = await getMailsOfUser(user);
        const data = response.data;
        setMails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMails();
  }, [user]);

  return (
    <GlobalContext.Provider value={{ mails, user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { ContextProvider, GlobalContext };
