import React, { Component} from 'react'
import PlantList from "./PlantList/PlantList"



class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            plants: []
        }
    }

    // componentDidMount() {
    //     console.log("component is mounting")
    //     this.getMovies();
    // }
    // deleteMovie = async (id) => {
    //     console.log(id)
    //     try{
    //         const deleteMovie = await fetch(`http://localhost:9000/api/v1/movies/${id}`, {
    //             method: "DELETE",
    //             credentials: "include",
    //         })
    //         const parsedResponse = await deleteMovie.json();
    //         if(parsedResponse.status.code === 200) {
    //             this.setState({
    //                 movies: this.state.movies.filter(movie => movie._id !== id)
                    
    //             })
    //         }
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    // updateMovie = async (id, formData) => {
    //     const updatedMovie = await fetch(`http://localhost:9000/api/v1/movies/${id}`, {
    //         method: "PUT",
    //         body: JSON.stringify(formData),
    //         credentials: "include",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     const parsedResponse = await updatedMovie.json();
    //     if(parsedResponse.status.code === 201){
    //         this.setState({
    //             movies: this.state.movies.map(function(movie){
    //                 if(movie._id === id){
    //                     return parsedResponse.data
    //                 }else{
    //                     return movie
    //                 }
    //             })
    //         })
    //     }
    //     console.log(parsedResponse)
    // }
    // createMovie = async (formData) => {
    //     console.log(formData)
    //     try{
    //         const newMovie = await fetch("http://localhost:9000/api/v1/movies", {
    //             method: "POST",
    //             body: JSON.stringify(formData),
    //             credentials: "include",
    //             headers: {
    //                 "Content-Type": "application/json",
                    
    //             }
    //         })
    //         const parsedResponse = await newMovie.json();
    //         if(parsedResponse.status.code === 201){
    //             this.setState({
    //                 movies: [...this.state.movies, parsedResponse.data]
    //             })
    //         }
    //     }catch(err) {

    //     }
    // }

    // getMovies = async () => {
    //     try{
    //     const movies = await fetch("http://localhost:9000/api/v1/movies")
    //     const parsedResponse = await movies.json();
    //     if(parsedResponse.status.code === 200){
    //         this.setState({
    //             movies: parsedResponse.data})
    //             console.log(parsedResponse.data)
    //         }
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    render() {
        return(
            <div>
                <h3>Here is the Movie Container</h3>
                <PlantList />
            </div>
        )
    }
}

export default MainContainer;