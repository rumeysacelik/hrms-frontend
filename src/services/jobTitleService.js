import axios from "axios";

export default class jobTitleService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobtitle/getall")
    }

    findByİd(id){
        return axios.get("http://localhost:8080/api/jobtitle/findbyid/"+id)
    }

    findByTitle(title){
        return axios.get("http://localhost:8080/api/jobtitle/findbytitle/"+title)
    }
}