import axios from "axios";

export default class jobAdvertisementService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall")
    }

    getAllActives(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getallactive")
    }

    getAllActiveWithSorted(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getallactivesorted")
    }

    getEmployerJobAds(id){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getEmployerJobAdvertisement?id="+id)
    }
    
    add(values){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",values)
    }

    getOneById(id){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getOneById?id="+id)
    }
    
}