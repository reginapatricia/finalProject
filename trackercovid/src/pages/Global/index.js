import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NumberFormat from "react-number-format";


const Global = () => {

    const [confirmed, setConfirmed]= useState("")
    const [recovery, setRecovery] = useState("")
    const [death, setDeath] = useState("")
  
  
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
      <h2><center> Data Kasus Covid-19 Global </center></h2>
      <div className ="card">
        <div className ="card-container">
        <h1>Positif</h1>
        <h2><NumberFormat value={confirmed}  thousandSeparator={true} displayType={'text'} isNumericString={true}></NumberFormat>
</h2>
</div>

<div className ="card-container1">
<h1>Sembuh</h1>
<h2><NumberFormat value={recovery}  thousandSeparator={true} displayType={'text'} isNumericString={true}></NumberFormat>
</h2>
</div>

<div className ="card-container2">
<h1>Meninggal</h1>
<h2><NumberFormat value={death}  thousandSeparator={true} displayType={'text'} isNumericString={true}></NumberFormat>
</h2>
</div>
</div>

     </>
    )
  }
  
export default Global;