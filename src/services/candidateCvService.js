import axios from "axios";

export default class candidateCvService{
    getAll(){
        return axios.get("http://localhost:8080/api/cv/getall")
    }

    findByCandidateId(id){
        return axios.get("http://localhost:8080/api/cv/findbycandidateid?id="+id)
    }

    add(values){
        return axios.post("http://localhost:8080/api/cv/add",values)
    }
    findByCvId(id){
        return axios.get("http://localhost:8080/api/cv/findbycvid?id="+id)
    }
    update(values){
        return axios.put("http://localhost:8080/api/cv/update",values)
    }
    
}

