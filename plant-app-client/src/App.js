import React from 'react';
import MainContainer from "./components/MainContainer"
import AuthGateway from '../src/components/AuthGateway/AuthGateway'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';



// function App() {
//   return (
//     <div className="App">      
//       <MainContainer />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false, 
      username: null
    }
  }
  handleRegister = async (formData) => {
    console.log("REGISTERING")
    console.log(formData);
    const registerResonse = await fetch("http://localhost:9000/auth/register", {
      method: "POST", 
      body: JSON.stringify(formData),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const parsedResponse = await registerResonse.json();
    console.log(parsedResponse)
    if(parsedResponse.status.code === 201){
      console.log("SUCCESFUL REGISTRATION")
      this.setState({
        loggedIn: true,
        username: parsedResponse.data.username
      })
    }
  }
  render(){
    return(
      <div className="App"> 
      {
        this.state.loggedIn? 
        <MainContainer /> :
        <AuthGateway handleRegister={this.handleRegister}/>
      }     
       
      </div>
    )
  }
}


export default App;

