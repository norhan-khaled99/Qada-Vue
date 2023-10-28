import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://finalqada.000webhostapp.com/",
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


