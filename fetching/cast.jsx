import axios from "axios";

export const cast = async ({ queryKey }) => {
  const [_, movieId] = queryKey;
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    params: { api_key: "6d502c823cba63b3c7ed34910f81aefe", language: "en-US" },
  };

  const response = await axios.request(options);
  return response;
};
