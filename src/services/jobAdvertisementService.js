import axios from "axios";

export default class jobAdvertisementsService{
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
}