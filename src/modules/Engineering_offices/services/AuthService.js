import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {},
});

const authService = {
  personData: {},
  register(credentials) {
    return apiClient.post("office/register", credentials);
  },
  login(credentials) {
    return apiClient.post("office/login", credentials);
  },
};

export default authService;


