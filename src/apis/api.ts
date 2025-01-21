import axios from "axios";
import { UnsplashSearchPhotoApiResponse } from "./type";

const api = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: import.meta.env.VITE_CLIENT_KEY,
  },
});

export const getDogImages =
  async (): Promise<UnsplashSearchPhotoApiResponse> => {
    const response = await api.get("search/photos", {
      params: {
        query: "dog",
        page: Math.floor(Math.random() * 100),
      },
    });

    return response.data;
  };

export default api;
