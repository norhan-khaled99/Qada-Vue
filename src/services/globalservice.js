import axios from "axios";
const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem('token')

    },
});



const globalService = {
//return aboutus , qa , parteners
   getGlobalSites(){
    return apiClient.get(`api/globals`)
   },
};


export default globalService;


