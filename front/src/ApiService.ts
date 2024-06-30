import axios from "axios";

const api = async () => {
  const api = axios.create({
    baseURL: "http://localhost:3000/",
  });

  return api;
};

export const getMails = async () => {
  return await api().then(async (api) => {
    return api.get(`/mail`);
  });
};

export const getMailsOfUser = async (user) => {
  return await api().then(async (api) => {
    return api.get(`/mail/user/${user.email}`);
  });
};

export const signUp = async (user) => {
  return await api().then(async (api) => {
    return api.post(`/user/signUp`, user);
  });
};

export const logIn = async (user) => {
  return await api().then(async (api) => {
    return api.post(`/user/logIn`, user);
  });
};
