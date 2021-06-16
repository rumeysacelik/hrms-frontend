import axios from "axios";

export default class workHourService{
    getAll(){
        return axios.get("http://localhost:8080/api/workhour/getall")
    }
}
