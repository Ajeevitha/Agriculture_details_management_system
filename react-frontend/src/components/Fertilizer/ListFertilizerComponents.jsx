import React, { Component } from 'react'
import FertilizerService from '../../services/FertilizerService'

class ListFertilizerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fertilizer: []
        }
        this.addFertilizer = this.addFertilizer.bind(this);
        this.editFertilizer = this.editFertilizer.bind(this);
        this.deleteFertilizer = this.deleteFertilizer.bind(this);
    }

    deleteFertilizer(id){
        FertilizerService.deleteFertilizer(id).then( res => {
            this.setState({fertilizer: this.state.fertilizer.filter(fertilizer => fertilizer.id !== id)});
        });
    }
    viewFertilizer(id){
        this.props.history.push(`/view-fertilizer/${id}`);
    }
    editFertilizer(id){
        this.props.history.push(`/add-fertilizer/${id}`);
    }

    componentDidMount(){
        FertilizerService.getFertilizer().then((res) => {
            this.setState({ fertilizer: res.data});
        });
    }

    addFertilizer(){
        this.props.history.push('/add-fertilizer/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Fertilizer List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addFertilizer}> Add Fertilizer</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th>Fertilizer Name</th>
                            <th>Fertilizer Chemical Name</th>
                            <th>Fertilizer Weight</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.fertilizer.map(
                                fertilizer =>
                                    <tr key = {fertilizer.id}>
                                        <td> {fertilizer.fertilizerName} </td>
                                        <td> {fertilizer.chemicalName}</td>
                                        <td> {fertilizer.weight}</td>
                                        <td>
                                            <button onClick={ () => this.editFertilizer(fertilizer.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFertilizer(fertilizer.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewFertilizer(fertilizer.id)} className="btn btn-info">View </button>
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

export default ListFertilizerComponent
