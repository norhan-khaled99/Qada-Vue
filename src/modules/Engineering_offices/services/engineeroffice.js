import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

const engineeringoffice = {
  addComment(data) {
    return apiClient.post(`office/comment`, data);
  },
  updateComment(data) {
    return apiClient.post(`office/update/comment`, data);
  },
};

export default engineeringoffice;
