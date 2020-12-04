import React, {useEffect, useState} from 'react'
import axios from 'axios';


const Indonesia = () => {

    const [cared, setCared]= useState([])
    const [recovery, setRecovery] = useState ([])
    const [death, setDeath] = useState([])
  
  
  useEffect(() => {
    axios
      .get('https://indonesia-covid-19.mathdro.id/api')
      .then((response) =>      
      
      { setCared(response.data.perawatan)
        setRecovery(response.data.sembuh)
        setDeath(response.data.meninggal)
      });
  }, []);
  
    return(
      <div>
        <h1 className = "card-container">Cared : {cared}</h1>
        <h1 className = "card-container"> Recovery : {recovery}</h1>
        <h1 className = "card-container">Death : {death}</h1>
      </div>
    )
  }
  
export default Indonesia;


