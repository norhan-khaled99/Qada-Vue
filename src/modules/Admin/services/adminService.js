import axios from "axios";
const apiClient = axios.create({
    baseURL: "https://finalqada.000webhostapp.com",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
});


const adminService = {
    approveproject(){
        return apiClient.post(`admin/projects/approve`)
    },
    addcontract(){
        return apiClient.post(`admin/projects/reject`)
    },
    addnewFile(){
        return apiClient.post(`bussiness/projects/newfile`)
    },
    placeproject(){
        return apiClient.post(`person/offers/placeOffer`)
    }
   
};


export default adminService;


