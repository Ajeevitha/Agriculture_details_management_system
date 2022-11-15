import React, { Component } from 'react'
import PlantService from '../../services/PlantService'

class ViewPlantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Plant: {}
        }
    }

    componentDidMount(){
        PlantService.getPlantById(this.state.id).then( res => {
            this.setState({Plant: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Plant Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Plant Plant Name: </label>
                            <div> { this.state.Plant.plantName }</div>
                        </div>
                        <div className = "row">
                            <label> Plant Scientific Name: </label>
                            <div> { this.state.Plant.scientificName }</div>
                        </div>
                        <div className = "row">
                            <label> Plant Species: </label>
                            <div> { this.state.Plant.species }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPlantComponent
