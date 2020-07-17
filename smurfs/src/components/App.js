import React, {useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

import { SmurfContext } from '../contexts/index';
import SmurfList from '../components/SmurfList';
import SmurfForm from '../components/SmurfForm';

function App (){
  const [smurfs, setSmurfs] = useState([])

  const getSmurf = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(function(res) {
      console.log(res);
      setSmurfs(res.data)
    })
      .catch(function(err) {
      console.log(err)
    })
  }

  useEffect(() =>{
    getSmurf()
    }, [])

  const postSmurf = aSmurf => {
    axios.post('http://localhost:3333/smurfs', aSmurf)
      .then(res => {
      setSmurfs(res.data)
      console.log(res)
      })
      .catch(err => {
      console.log(err)
      })
    } 
  
    useEffect(() =>{
    postSmurf()
    }, [])


    return (
      <div className="App">
        <h1>🔵Welcome to the Smurf Village!🔵</h1>
        <SmurfContext.Provider value={{ smurfs, postSmurf, setSmurfs}}>
        <SmurfForm />
        <SmurfList />
        </SmurfContext.Provider>
      </div>
    );
  
}

export default App;
