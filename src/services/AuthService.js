import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    // Add any common headers if needed
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const authService = {
  userData: {},
  register(credentials) {
    return apiClient.post("person/register", credentials);
  },
  login(credentials) {
    return apiClient.post("person/login", credentials);
  },
};

export default authService;
