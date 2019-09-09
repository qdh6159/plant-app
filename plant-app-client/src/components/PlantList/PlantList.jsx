import React from 'react';
// import plantsContainer from './plantsContainer/plantsContainer'
import BasicCardExample from '../Cards/Card'
import MoreModal from '../MoreComponent'

import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

function PlantList(props){
  const plants = props.plants.map(function(plant){
      return (
        <li key={plant._id}>
          <Card small={true} style={{ maxWidth: "250px" }}>
          <CardHeader></CardHeader>
          <CardImg src="https://edge.bonnieplants.com/www/uploads/20180920002445/organic-rosemary-web.jpg" />
          <CardBody>
          <CardTitle>{plant.name}</CardTitle>
        <p>{plant.description}</p>
        <MoreModal name={plant.name} scientificName={plant.scientificName} water={plant.water} sun={plant.sun} description={plant.description}
        imageOne={plant.imageOne} imageTwo={plant.imageTwo}
        />
      </CardBody>
      
    </Card>







          {/* <h3>{plant.name}</h3>
          <p> {plant.description}</p>
          <p> {plant._id}</p> */}

          {/* <button onClick={() =>{
              props.deleteMovie(plant._id)
          }}>Delete</button> */}
          {/* <Button color="primary" onClick={() =>{}}>Edit</Button> */}
          {/* <EditMovie id={plant._id} updateMovie={props.updateMovie}  /> */}
          
          
          
      </li>)
    })
  
    return (
      <ul>
        {plants}
      </ul>
      )
}


export default PlantList

// function PlantList(){
//       return (
//         <div class="cardExample">
//           <BasicCardExample />
//         </div>
//         )
// }


// export default PlantList