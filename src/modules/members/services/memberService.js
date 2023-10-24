import axios from "axios";
const apiClient = axios.create({
    baseURL: "https://finalqada.000webhostapp.com",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
});


const memberService = {
    addproject(data){
        return apiClient.post(`person/projects/create`,data)
    }

   
};


export default memberService;


