import axios from "axios";

export const popularMovies = async () => {
  const options = {
    method: "GET",
    url: "/api/popular",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  const response = await axios.request(options);
  return response.data.data;
};
