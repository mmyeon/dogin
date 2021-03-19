import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    // TODO: 환경변수로 처리
    client_id: "W-eOypZHAhpBZS1NMmg4vpQpOwrEgO8PAyAUSvEYLJ8",
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
