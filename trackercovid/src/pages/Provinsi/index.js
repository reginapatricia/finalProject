import React, {useEffect, useState} from 'react'
import axios from 'axios';



const Provinsi = () => {

    const [users, setUsers]= useState([]);
  
  
  useEffect(() => {
    axios
      .get('https://indonesia-covid-19.mathdro.id/api')
      .then((response) => setUsers(response.data));
  }, []);
  console.log(users);
  
  
    return(
      <div>

      </div>
    )
  }
  
export default Provinsi;


