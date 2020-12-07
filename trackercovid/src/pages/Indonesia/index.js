import React, {useEffect, useState} from 'react'
import axios from 'axios';
import NumberFormat from "react-number-format"

const Indonesia = () => {

    const [cared, setCared]= useState([])
    const [recovery, setRecovery] = useState ([])
    const [death, setDeath] = useState([])
  
  
  useEffect(() => {
    axios
      .get('https://indonesia-covid-19.mathdro.id/api')
      .then((response) =>      
      
      { setCared(response.data.jumlahKasus)
        setRecovery(response.data.sembuh)
        setDeath(response.data.meninggal)
      });
  }, []);
  
    return(
      <>
      <h2><center>Indonesia Data </center></h2>
      <div className = "card">
        <h1 className = "card-container"> Jumlah Kasus : {cared}</h1>
        <h1 className = "card-container"> Sembuh : {recovery}</h1>
        <h1 className = "card-container">Meninggal : {death}</h1>
      </div>
      </>
    )
  }
  
export default Indonesia;


