import axios from "axios";

const Api = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID xcse8f8M8zpkMKgIp8mIFfxqLnXZ48zQugYDNcCs48U",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default Api;
