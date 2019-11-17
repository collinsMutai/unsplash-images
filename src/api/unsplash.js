import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 91a975f468a057762a6569d974add520830982ac8def623e06cb6347903c49e9"
  }
});
