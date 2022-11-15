import React, { Component } from 'react'
import PlantService from '../../services/PlantService'

class ListPlantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            plants: []
        }
        this.addPlant = this.addPlant.bind(this);
        this.editPlant = this.editPlant.bind(this);
        this.deletePlant = this.deletePlant.bind(this);
    }

    deletePlant(id){
        PlantService.deletePlant(id).then( res => {
            this.setState({plants: this.state.plants.filter(plant => plant.id !== id)});
        });
    }
    viewPlant(id){
        this.props.history.push(`/view-plant/${id}`);
    }
    editPlant(id){
        this.props.history.push(`/add-plant/${id}`);
    }

    componentDidMount(){
        PlantService.getPlants().then((res) => {
            this.setState({ plants: res.data});
        });
    }

    addPlant(){
        this.props.history.push('/add-plant/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Plants List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPlant}> Add Plant</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th> Plant Name</th>
                            <th> Scientific Name</th>
                            <th> Species</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.plants.map(
                                plant =>
                                    <tr key = {plant.id}>
                                        <td> {plant.plantName} </td>
                                        <td> {plant.scientificName}</td>
                                        <td> {plant.species}</td>
                                        <td>
                                            <button onClick={ () => this.editPlant(plant.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deletePlant(plant.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewPlant(plant.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListPlantComponent
