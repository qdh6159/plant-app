import React, { Component} from 'react'
import PlantList from "./PlantList/PlantList"
import PlantNav from "./nav"




class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            plants: []
        }
    }

    componentDidMount() {
        console.log("component is mounting")
        this.getMovies();
    }
    deletePlant = async (id) => {
        console.log(id)
        try{
            const deletePlant = await fetch(`http://localhost:9000/plants/${id}`, {
                method: "DELETE",
                credentials: "include",
            })
            const parsedResponse = await deletePlant.json();
            if(parsedResponse.status.code === 200) {
                this.setState({
                    plants: this.state.plants.filter(plant => plant._id !== id)
                    
                })
            }
        }catch(err){
            console.log(err)
        }
    }
    updatePlant = async (id, formData) => {
        const updatePlant = await fetch(`http://localhost:9000/plants/${id}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await updatePlant.json();
        if(parsedResponse.status.code === 201){
            this.setState({
                plants: this.state.plants.map(function(plant){
                    if(plant._id === id){
                        return parsedResponse.data
                    }else{
                        return plant
                    }
                })
            })
        }
        console.log(parsedResponse)
    }
    createPlant = async (formData) => {
        console.log(formData)
        try{
            const newPlant = await fetch("http://localhost:9000/plants", {
                method: "POST",
                body: JSON.stringify(formData),
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    
                }
            })
            const parsedResponse = await newPlant.json();
            if(parsedResponse.status.code === 201){
                this.setState({
                    plants: [...this.state.plants, parsedResponse.data]
                })
            }
            console.log("********************")
            console.log(this.state)
        }catch(err) {

        }
    }

    getMovies = async () => {
        try{
            console.log("Getting the movies*****************")
        const plants = await fetch("http://localhost:9000/plants")
        const parsedResponse = await plants.json();
        if(parsedResponse.status.code === 200){
            this.setState({
                plants: parsedResponse.data})
                console.log(parsedResponse.data)
                console.log("We got the movies")
                console.log(this.state)
            }
        }catch(err){
            console.log(err)
        }
    }
    render() {
        return(
            <div>
                <PlantNav createPlant= {this.createPlant} />
                <h3>Dashboard</h3>
                <PlantList updatePlant={this.updatePlant} deletePlant={this.deletePlant} plants={this.state.plants} />
            </div>
        )
    }
}

export default MainContainer;