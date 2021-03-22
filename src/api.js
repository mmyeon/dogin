import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: process.env.REACT_APP_CLIENT_KEY,
  },
});

export const getDogImageApi = () =>
  api.get("search/photos", {
    params: {
      query: "dog",
      page: Math.floor(Math.random() * 100),
    },
  });

export default api;
