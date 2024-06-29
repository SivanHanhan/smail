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

export const signUp = async (user) => {
  return await api().then(async (api) => {
    return api.post(`/user/signUp`, user);
  });
};

export const logIn = async (user) => {
  return await api().then(async (api) => {
    return api.get(`/user/logIn`, user);
  });
};

// export const updateCurrentPage = async (id, current_page) => {
//   return await api().then(async (api) => {
//     return api.put(`/books/currentPage`, {id, current_page});
//   });
// };

// export const updateReadingStatus = async (id, reading_status) => {
//   return await api().then(async (api) => {
//     // return api.put(`/books/readingStatus`,reading_status);
//     return api.put(`/books/readingStatus`, { id, reading_status});
//   });
// };

export const createBook = async (book) => {
  return await api().then(async (api) => {
    return api.post(`/books`, book);
  });
};

// export const deleteBook = async (id) => {
//   return await api().then(async (api) => {
//     return api.delete(`/books/${id}`);
//   });
// };

// export const getAllreadingStatuses = async () => {
//   return await api().then(async (api) => {
//     return api.get('/readingStatuses');
//   });
// };
