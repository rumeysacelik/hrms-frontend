import axios from "axios";

export default class workTypeService{
    getAll(){
        return axios.get("http://localhost:8080/api/worktype/getall")
    }
}
