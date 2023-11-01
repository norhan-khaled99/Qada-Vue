import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://d6f7-156-209-81-46.ngrok-free.app",
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


