import React, {useEffect, useState} from 'react'
import axios from 'axios';
import NumberFormat from "react-number-format"

const Indonesia = () => {

    const [cared, setCared]= useState("")
    const [recovery, setRecovery] = useState ("")
    const [death, setDeath] = useState("")
    const [confirmed, setConfirmed] = useState("")
  
  
  useEffect(() => {
    axios
      .get('https://indonesia-covid-19.mathdro.id/api')
      .then((response) =>      
      
      { setCared(response.data.jumlahKasus)
        setRecovery(response.data.sembuh)
        setDeath(response.data.meninggal)
        setConfirmed(response.data.perawatan)
      });
  }, []);
  
    return(
      <>
      <h2><center>Data Kasus Covid-19 di Indonesia </center></h2>
      <div className ="card">
        <div className ="card-container2">
        <h1>Jumlah Kasus</h1>
        <h2><NumberFormat value={cared}  thousandSeparator={true} displayType={'text'} isNumericString={true}></NumberFormat>
        </h2>
        <p>Jumlah kasus Covid-19 di Indonesia</p>
      </div>

      <div className ="card-container3">
        <h1>Perawatan</h1>
        <h2><NumberFormat value={confirmed}  thousandSeparator={true} displayType={'text'} isNumericString={true}></NumberFormat>
        </h2>
        <p>Jumlah pasien Covid-19 dalam perawatan di Indonesia</p>
      </div>

      <div className ="card-container1">
        <h1>Sembuh</h1>
        <h2><NumberFormat value={recovery}  thousandSeparator={true} displayType={'text'} isNumericString={true}></NumberFormat>
        </h2>
        <p>Jumlah pasien Covid-19 sembuh di Indonesia</p>
      </div>

      <div className ="card-container">
        <h1>Meninggal</h1>
        <h2><NumberFormat value={death}  thousandSeparator={true} displayType={'text'} isNumericString={true}></NumberFormat>
        </h2>
        <p>Jumlah pasien Covid-19 yang meninggal di Indonesia</p>
      </div>
</div>
      </>
    )
  }
  
export default Indonesia;


