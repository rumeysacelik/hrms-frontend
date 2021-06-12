import axios from "axios";

export default class candidateJobExperienceService{
    getAllJobExperiences(){
        return axios.get("http://localhost:8080/api/candidateexperience/getall")
    }

    getJobExperienceWithOrdered() {
        return axios.get("http://localhost:8080/api/candidateexperience/getcandidateJobExperiencesswithordered?id="+id)
    
    }
}

