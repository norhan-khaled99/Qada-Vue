import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://6e94-156-209-14-159.ngrok-free.app",
  headers: {},
});

const authService = {
  personData: {},
  register(credentials) {
    return apiClient.post("person/register", credentials);
  },
  login(credentials) {
    return apiClient.post("person/login", credentials);
  },
};

export default authService;


