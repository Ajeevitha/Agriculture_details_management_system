import axios from 'axios';

const FERTILIZER_API_BASE_URL = "http://localhost:8081/api/v3/fertilizer";

class FertilizerService {

    getFertilizer(){
        return axios.get(FERTILIZER_API_BASE_URL);
    }

    createFertilizer(fertilizer){
        return axios.post(FERTILIZER_API_BASE_URL, fertilizer);
    }

    getFertilizerById(fertilizerId){
        return axios.get(FERTILIZER_API_BASE_URL + '/' + fertilizerId);
    }

    updateFertilizer(fertilizer, fertilizerId){
        return axios.put(FERTILIZER_API_BASE_URL + '/' + fertilizerId, fertilizer);
    }

    deleteFertilizer(fertilizerId){
        return axios.delete(FERTILIZER_API_BASE_URL + '/' + fertilizerId);
    }
}

export default new FertilizerService()