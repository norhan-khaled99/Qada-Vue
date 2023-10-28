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
    },
    addcontract(data){
        return apiClient.post(`bussiness/contracts/create`,data)
    },
    addnewFile(){
        return apiClient.post(`bussiness/projects/newfile`)
    },
    placeproject(){
        return apiClient.post(`person/offers/placeOffer`)
    }
   
};


export default memberService;


