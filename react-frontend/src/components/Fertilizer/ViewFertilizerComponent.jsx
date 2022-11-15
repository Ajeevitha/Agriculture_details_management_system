import React, { Component } from 'react'
import FertilizerService from '../../services/FertilizerService'

class ViewFertilizerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            fertilizer: {}
        }
    }

    componentDidMount(){
        FertilizerService.getFertilizerById(this.state.id).then( res => {
            this.setState({fertilizer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Fertilizer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Fertilizer Name: </label>
                            <div> { this.state.fertilizer.fertilizerName }</div>
                        </div>
                        <div className = "row">
                            <label>Chemical Name: </label>
                            <div> { this.state.fertilizer.chemicalName }</div>
                        </div>
                        <div className = "row">
                            <label>Weight: </label>
                            <div> { this.state.fertilizer.weight }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewFertilizerComponent
