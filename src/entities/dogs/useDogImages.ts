import { useQuery } from "@tanstack/react-query";
import { getDogImages } from "./api";

export const useDogImages = () => {
  return useQuery({
    queryKey: ["dogImgUrls"],
    queryFn: async () => {
      const data = await getDogImages();
      return data.results.map((item) => item.urls.small);
    },
  });
};
