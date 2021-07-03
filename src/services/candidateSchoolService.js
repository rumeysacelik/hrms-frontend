import axios from "axios";

export default class candidateSchoolService{
    getAll(){
        return axios.get("http://localhost:8080/api/candidateschools/getall")
    }
    findByCandidateId(id){
        return axios.get("http://localhost:8080/api/candidateschools/findbycandidatecvid?id="+id)
    }
    getSchoolWithOrdered(id){
        return axios.get("http://localhost:8080/api/candidateschools/getcandidateschoolswithordered?id="+id)
    }
    add(object){
        return axios.post("http://localhost:8080/api/candidateschools/add",object)
    }
    deleteSchool(schoolId){
        return axios.delete(`http://localhost:8080/api/candidateschools/deleteSchool?schoolId=${schoolId}`)
    }
    update(values) {
        return axios.post("http://localhost:8080/api/candidateschools/update",values);
    }
    
}
