import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: { },
});

const authService = {
  register(credentials) {
    return apiClient.post("bussiness/register", credentials);
  },
  login(credentials) {
    return apiClient.post("bussiness/login", credentials);
  },
};

export default authService;


