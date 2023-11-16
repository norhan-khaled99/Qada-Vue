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

const engineeringoffice = {
  addComment(data) {
    return apiClient.post(`office/comments/create`, data);
  },
  updateComment(data) {
    return apiClient.post(`office/comments/edit`, data);
  },
  addOffer(data){
    return apiClient.post(`office/offers/placeOffer`,data)
  }

  
};

export default engineeringoffice;
