import axios from 'axios';

const PLANT_API_BASE_URL = "http://localhost:8081/api/v2/plant";

class PlantService {

    getPlants(){
        return axios.get(PLANT_API_BASE_URL + 's');
    }

    createPlant(plant){
        return axios.post(PLANT_API_BASE_URL, plant);
    }

    getPlantById(plantId){
        return axios.get(PLANT_API_BASE_URL + '/' + plantId);
    }

    updatePlant(plant, plantId){
        return axios.put(PLANT_API_BASE_URL + '/' + plantId, plant);
    }

    deletePlant(plantId){
        return axios.delete(PLANT_API_BASE_URL + '/' + plantId);
    }
}

export default new PlantService()