import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Global = () => {

    const [confirmed, setConfirmed]= useState([])
    const [recovery, setRecovery] = useState([])
    const [death, setDeath] = useState([])
  
  
  useEffect(() => {
    axios
      .get('https://covid19.mathdro.id/api')
      .then((response) => 
      { setConfirmed(response.data.confirmed.value)
        setRecovery(response.data.recovered.value)
        setDeath(response.data.deaths.value)
      });
  }, []);

  
    return(
      <div>
        <p className ="card-container">confirmed  : {confirmed}</p>
        <p className = "card-container">recovery  : {recovery}</p>
        <p className = "card-container">death     : {death}</p>
     </div>
    )
  }
  
export default Global;


