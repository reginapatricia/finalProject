import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NumberFormat from "react-number-format";


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
      <>
      <div className ="card">

      <div className ="card-container">
      <h1>Positif</h1>
      <NumberFormat value={setConfirmed.confirmed}  thousandSeparator={true} displayType={'text'} isNumericString={true}></NumberFormat>

      </div>

      <div className ="card-container">
      <h1>Sembuh</h1>
      <NumberFormat value={setRecovery.recovery}  thousandSeparator={true} displayType={'text'} isNumericString={true}></NumberFormat>
      </div>

      <div className ="card-container">
      <h1>Meninggal</h1>
      <NumberFormat value={setDeath.death}  thousandSeparator={true} displayType={'text'} isNumericString={true}></NumberFormat>
      </div>
</div>

     </>
    )
  }
  
export default Global;




