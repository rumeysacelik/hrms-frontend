import axios from "axios";

export default class candidateTalentService{
    getAll(){
        return axios.get("http://localhost:8080/api/candidatetalents/getall")
    }
    add(object){
        return axios.post("http://localhost:8080/api/talent/add",object)
    }
    findByCandidateId(id){
        return axios.get("http://localhost:8080/api/candidatetalents/findbycandidatecvid?id="+id)
    }
    deleteTalent(talentId){
        return axios.delete(`http://localhost:8080/api/candidatetalents/deleteTalent?talentId=1${talentId}`)
    }

    update(talentId){
        return axios.put("http://localhost:8080/api/cv/update",talentId)
    }

}

