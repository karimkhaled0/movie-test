import axios from "axios";

export const popularMovies = async () => {
  const options = { method: "GET", url: "http://localhost:3000/api/popular" };

  const response = await axios.request(options);
  return response.data.data;
};
