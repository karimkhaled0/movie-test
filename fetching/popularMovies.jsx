import axios from "axios";

export const popularMovies = async () => {
  const options = {
    method: "GET",
    url: "https://movie-test-ten.vercel.app/api/popular",
  };

  const response = await axios.request(options);
  return response.data.data;
};
