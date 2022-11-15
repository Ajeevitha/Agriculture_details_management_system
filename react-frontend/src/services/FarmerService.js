import axios from 'axios';

const FARMER_API_BASE_URL = "http://localhost:8081/api/v1/farmers";

class FarmerService {

    getFarmers(){
        return axios.get(FARMER_API_BASE_URL);
    }

    createFarmer(farmer){
        return axios.post(FARMER_API_BASE_URL, farmer);
    }

    getFarmerById(farmerId){
        return axios.get(FARMER_API_BASE_URL + '/' + farmerId);
    }

    updateFarmer(farmer, farmerId){
        return axios.put(FARMER_API_BASE_URL + '/' + farmerId, farmer);
    }

    deleteFarmer(farmerId){
        return axios.delete(FARMER_API_BASE_URL + '/' + farmerId);
    }
}

export default new FarmerService()