import React, {useEffect, useState} from 'react'
import axios from 'axios';



const Provinsi = () => {

    const [users, setUsers]= useState([]);
  
  
  useEffect(() => {
    axios
      .get('https://indonesia-covid-19.mathdro.id/api/provinsi')
      .then((response) => setUsers(response.data));
  }, []);
  console.log(users);
  
  
    return(
      <div>
          <h1>Provinsi Pages</h1>
      </div>
    )
  }
  
export default Provinsi;


