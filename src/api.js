import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: "W-eOypZHAhpBZS1NMmg4vpQpOwrEgO8PAyAUSvEYLJ8",
  },
});

export const getDogImageApi = () =>
  api.get("search/photos", {
    params: {
      query: "dog",
    },
  });

export default api;
