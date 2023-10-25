import axios from "axios";
const apiClient = axios.create({
    baseURL: "https://finalqada.000webhostapp.com",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
});


const adminService = {
    approveproject(projectID){
        return apiClient.post(`admin/projects/approve`,projectID)
    },
    addcontract(projectID){
        return apiClient.post(`admin/projects/reject`,projectID)
    },
   addQuestion(){
    return apiClient.post(`admin/questions/create`)
   },
   editQuestion(){
    return apiClient.post(`admin/questions/update`)
   },
   deleteQuestion(questionid){
    return apiClient.post(`admin/questions/delete`,questionid)
   }
   
};


export default adminService;


