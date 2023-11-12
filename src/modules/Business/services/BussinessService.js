import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    'Content-Type': 'multipart/form-data',
        "Accept": "*/*",
        "Content-Length": '',
        "Accept-Encoding": 'gzip, deflate, br',
        "Connection": 'keep-alive',
        "Host": '',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
});

const bussinessService = {
  addComment(data) {
    return apiClient.post(`bussiness/comments/create`, data);
  },
  updateComment(data) {
    return apiClient.post(`bussiness/comments/edit`, data);
  },
};

export default bussinessService;
