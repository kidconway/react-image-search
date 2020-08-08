import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID f0aQAAfbZPgz58OD0jouiXZ208S2qqE2X0wlqBl8omY"
  }
});
