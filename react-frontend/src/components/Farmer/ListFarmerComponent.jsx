import React, { Component } from 'react'
import FarmerService from '../../services/FarmerService'

class ListFarmerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                farmers: []
        }
        this.addFarmer = this.addFarmer.bind(this);
        this.editFarmer = this.editFarmer.bind(this);
        this.deleteFarmer = this.deleteFarmer.bind(this);
    }

    deleteFarmer(id){
        FarmerService.deleteFarmer(id).then( res => {
            this.setState({farmers: this.state.farmers.filter(farmer => farmer.id !== id)});
        });
    }
    viewFarmer(id){
        this.props.history.push(`/view-farmer/${id}`);
    }
    editFarmer(id){
        this.props.history.push(`/add-farmer/${id}`);
    }

    componentDidMount(){
        FarmerService.getFarmers().then((res) => {
            this.setState({ farmers: res.data});
        });
    }

    addFarmer(){
        this.props.history.push('/add-farmer/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Farmers List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addFarmer}> Add Farmer</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Farmer First Name</th>
                                    <th> Farmer Last Name</th>
                                    <th> Farmer Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.farmers.map(
                                        farmer =>
                                        <tr key = {farmer.id}>
                                             <td> { farmer.firstName} </td>
                                             <td> {farmer.lastName}</td>
                                             <td> {farmer.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editFarmer(farmer.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFarmer(farmer.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewFarmer(farmer.id)} className="btn btn-info">View </button>
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

export default ListFarmerComponent
