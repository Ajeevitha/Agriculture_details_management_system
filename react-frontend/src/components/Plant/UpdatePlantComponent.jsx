import React, { Component } from 'react'
import PlantService from '../../services/PlantService';

class UpdatePlantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            plantName: '',
            scientificName: '',
            species: ''
        }
        this.changePlantNameHandler = this.changePlantNameHandler.bind(this);
        this.changeScientificNameHandler = this.changeScientificNameHandler.bind(this);
        this.updatePlant = this.updatePlant.bind(this);
    }

    componentDidMount(){
        PlantService.getPlantById(this.state.id).then( (res) =>{
            let plant = res.data;
            this.setState({plantName: plant.plantName,
                scientificName: plant.scientificName,
                species : plant.species
            });
        });
    }

    updatePlant = (e) => {
        e.preventDefault();
        let plant = {plantName: this.state.plantName, scientificName: this.state.scientificName, species: this.state.species};
        console.log('plant => ' + JSON.stringify(plant));
        console.log('id => ' + JSON.stringify(this.state.id));
        PlantService.updatePlant(plant, this.state.id).then( res => {
            this.props.history.push('/plants');
        });
    }

    changePlantNameHandler= (event) => {
        this.setState({plantName: event.target.value});
    }

    changeScientificNameHandler= (event) => {
        this.setState({scientificName: event.target.value});
    }

    changeSpeciesHandler= (event) => {
        this.setState({species: event.target.value});
    }

    cancel(){
        this.props.history.push('/plants');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Plant</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Plant Name: </label>
                                        <input placeholder="Plant Name" name="plantName" className="form-control"
                                               value={this.state.plantName} onChange={this.changePlantNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Scientific Name: </label>
                                        <input placeholder="Scientific Name" name="scientificName" className="form-control"
                                               value={this.state.scientificName} onChange={this.changeScientificNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Species : </label>
                                        <input placeholder="Species " name="species" className="form-control"
                                               value={this.state.species} onChange={this.changeSpeciesHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updatePlant}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdatePlantComponent
