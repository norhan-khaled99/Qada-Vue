import axios from "axios";
const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('token')
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
    },
    getAllProjectFormember(){
        return apiClient.get(`api/welcome`)
    },
};


export default memberService;


