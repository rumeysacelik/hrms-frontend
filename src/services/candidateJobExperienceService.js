import axios from "axios";

export default class candidateJobExperienceService{
    getAllJobExperiences(){
        return axios.get("http://localhost:8080/api/candidateexperience/getall")
    }

    getJobExperienceWithOrdered(id) {
        return axios.get("http://localhost:8080/api/candidateexperience/getcandidateJobExperiencesswithordered?id="+id)
    
    }

    findByCandidateId(id){
        return axios.get("http://localhost:8080/api/candidateexperience/findbycandidatecvid?id="+id)
    }

    add(object){
        return axios.post("http://localhost:8080/api/candidateexperience/add",object)
    }

    update(values) {
        return axios.post("http://localhost:8080/api/candidateexperience/update",values);
    }
}

