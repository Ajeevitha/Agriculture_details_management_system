import React, { Component } from 'react'
import FertilizerService from '../../services/FertilizerService';

class CreateFertilizerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            fertilizerName: '',
            chemicalName: '',
            weight: ''
        }
        this.changeFertilizerNameHandler = this.changeFertilizerNameHandler.bind(this);
        this.changeChemicalNameHandler = this.changeChemicalNameHandler.bind(this);
        //this.changeWeightHandler = this.changeWeightHandler.bind(this);
        this.saveOrUpdateFertilizer = this.saveOrUpdateFertilizer.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            FertilizerService.getFertilizerById(this.state.id).then( (res) =>{
                let fertilizer = res.data;
                this.setState({fertilizerName: fertilizer.fertilizerName,
                    chemicalName: fertilizer.chemicalName,
                    weight: fertilizer.weight
                });
            });
        }
    }
    saveOrUpdateFertilizer  = (e) => {
        e.preventDefault();
        let fertilizer = {fertilizerName: this.state.fertilizerName, chemicalName: this.state.chemicalName, weight: this.state.weight};
        console.log('fertilizer => ' + JSON.stringify(fertilizer));

        // step 5
        if(this.state.id === '_add'){
            FertilizerService.createFertilizer(fertilizer).then(res =>{
                this.props.history.push('/fertilizer');
            });
        }else{
            FertilizerService.updateFertilizer(fertilizer, this.state.id).then( res => {
                this.props.history.push('/fertilizer');
            });
        }
    }

    changeFertilizerNameHandler= (event) => {
        this.setState({fertilizerName: event.target.value});
    }

    changeChemicalNameHandler= (event) => {
        this.setState({chemicalName: event.target.value});
    }

    changeWeightHandler= (event) => {
        this.setState({weight: event.target.value});
    }

    cancel(){
        this.props.history.push('/fertilizer');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Fertilizer</h3>
        }else{
            return <h3 className="text-center">Update Fertilizer</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Fertilizer Name: </label>
                                        <input placeholder="Fertilizer Name" name="fertilizerName" className="form-control"
                                               value={this.state.fertilizerName} onChange={this.changeFertilizerNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Chemical Name: </label>
                                        <input placeholder="Chemical Name" name="chemicalName" className="form-control"
                                               value={this.state.chemicalName} onChange={this.changeChemicalNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>  Weight: </label>
                                        <input placeholder="Weight" name="weight" className="form-control"
                                               value={this.state.weight} onChange={this.changeWeightHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateFertilizer}>Save</button>
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

export default CreateFertilizerComponent
