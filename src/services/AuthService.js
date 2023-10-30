import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {},
});

const authService = {
  personData: {},
  register(credentials) {
    return apiClient.post("person/register", credentials);
  },
  login(credentials) {
    console.log("sjzalZJLx")
    return apiClient.post("person/login", credentials);
  },
};

export default authService;


