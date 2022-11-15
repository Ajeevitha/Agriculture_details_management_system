import React from 'react';
import './App.css';
//import "./index.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListFarmerComponent from './components/Farmer/ListFarmerComponent';
import HeaderComponent from './Navigation/HeaderComponent';
import FooterComponent from './Navigation/FooterComponent';
import CreateFarmerComponent from './components/Farmer/CreateFarmerComponent';
import UpdateFarmerComponent from './components/Farmer/UpdateFarmerComponent';
import ViewFarmerComponent from './components/Farmer/ViewFarmerComponent';
import ListPlantComponent from "./components/Plant/ListPlantComponent";
import CreatePlantComponent from "./components/Plant/CreatePlantComponent";
import ViewPlantComponent from "./components/Plant/ViewPlantComponent";
import UpdatePlantComponent from "./components/Plant/UpdatePlantComponent";
import ListFertilizerComponent from "./components/Fertilizer/ListFertilizerComponents";
import CreateFertilizerComponent from "./components/Fertilizer/CreateFertilizerComponents";
import ViewFertilizerComponent from "./components/Fertilizer/ViewFertilizerComponent";
import UpdateFertilizerComponent from "./components/Fertilizer/UpdateFertilizercomponent";
import Navbar from "./Navigation/NavbarIndex";

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
            <div>
            <Navbar/>
            </div>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListFarmerComponent}></Route>
                          <Route path = "/farmer" component = {ListFarmerComponent}></Route>
                          <Route path = "/add-farmer/:id" component = {CreateFarmerComponent}></Route>
                          <Route path = "/view-farmer/:id" component = {ViewFarmerComponent}></Route>
                          <Route path = "/update-farmer/:id" component = {UpdateFarmerComponent}></Route>

                        <Route path = "/" exact component = {ListPlantComponent}></Route>
                        <Route path = "/plants" component = {ListPlantComponent}></Route>
                        <Route path = "/add-plant/:id" component = {CreatePlantComponent}></Route>
                        <Route path = "/view-plant/:id" component = {ViewPlantComponent}></Route>
                        <Route path = "/update-plant/:id" component = {UpdatePlantComponent}></Route>

                        <Route path = "/" exact component = {ListFertilizerComponent}></Route>
                        <Route path = "/fertilizer" component = {ListFertilizerComponent}></Route>
                        <Route path = "/add-fertilizer/:id" component = {CreateFertilizerComponent}></Route>
                        <Route path = "/view-fertilizer/:id" component = {ViewFertilizerComponent}></Route>
                        <Route path = "/update-fertilizer/:id" component = {UpdateFertilizerComponent}></Route>

                    </Switch>
                </div>
              {/*<FooterComponent />*/}
        </Router>

    </div>

  );
}

export default App;
