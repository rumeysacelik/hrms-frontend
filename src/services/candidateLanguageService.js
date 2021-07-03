import axios from "axios";

export default class candidateLanguageService{
    getAll(){
        return axios.get("http://localhost:8080/api/candidatelanguages/getall")
    }
    findByCandidateId(id){
        return axios.get("http://localhost:8080/api/candidatelanguages/findbycandidatecvid?id="+id)
    }

    add(object){
        return axios.post("http://localhost:8080/api/candidatelanguages/add",object)
    }
    deleteLanguage(languageId){
        return axios.delete(`http://localhost:8080/api/candidatelanguages/deleteLanguage?languageId=${languageId}`)
    }
    update(values) {
        return axios.post("http://localhost:8080/api/candidatelanguages/update",values);
    }
}


