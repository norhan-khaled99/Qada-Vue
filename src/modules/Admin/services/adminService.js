import axios from "axios";
const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
});


const adminService = {
    // this is public service
    getAllTerms(){
      return apiClient.get(`api/terms`)
    },
    getAllQuestion(){
      return apiClient.get(`api/terms`)
    },
    ////////////////////////////

    approveproject(projectID){
        return apiClient.post(`admin/projects/approve`,projectID)
    },
    addcontract(projectID){
        return apiClient.post(`admin/projects/reject`,projectID)
    },
   addQuestion(data){
    return apiClient.post(`admin/questions/create`,data)
   },
   editQuestion(questionid,data){
    return apiClient.post(`admin/questions/update`,questionid,data)
   },
   deleteQuestion(questionid){
    return apiClient.post(`admin/questions/delete`,questionid)
   }
   
};


export default adminService;


