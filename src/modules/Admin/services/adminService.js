import axios from "axios";
const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
      'Content-Type': 'application/json',
      "Accept": "*/*",
      "Content-Length": '',
      "Accept-Encoding": 'gzip, deflate, br',
      "Connection": 'keep-alive',
      "Host": '',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
});


const adminService = {
  // this is public service
    login(credentials) {
      return apiClient.post("admin/login", credentials);
    },
    getPendingProjects() {
      return apiClient.post(`admin/projects/index`)
    },
    approveproject(projectID){
        return apiClient.post(`admin/projects/approve`,projectID)
    },
    projectRejection(projectId) {
      return apiClient.post(`admin/projects/approve`,projectId)
    },
    getAllTerms(){
      return apiClient.get(`api/terms`)
    },
    getAllQuestion(){
      return apiClient.get(`api/terms`)
    },
    ////////////////////////////

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


