import axios from "axios";

export const video = async ({ queryKey }) => {
  const [_, movieId] = queryKey;
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
    params: { api_key: "6d502c823cba63b3c7ed34910f81aefe", language: "en-US" },
  };

  const response = await axios.request(options);
  return response;
};
