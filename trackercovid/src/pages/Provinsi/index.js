import React, {components, useEffect, useState} from 'react'
import axios from 'axios';
import NumberFormat from "react-number-format"



const Provinsi = () => {

    const [users, setUsers]= useState([]);
  
  
  useEffect(() => {
    axios
      .get('https://indonesia-covid-19.mathdro.id/api/provinsi')
      .then((response) => {setUsers(response.data.data)});
  }, []);
  console.log(users);
  
  
    return(
      <>
      <h2><center>Data Kasus Covid-19 di Tiap Provinsi </center></h2>
  <center> <table border="3"> 
        <tr>
          <td>Provinsi</td>
          <td>Kasus Positif</td>
          <td>Kasus Sembuh</td>
          <td>Meninggal</td>
        </tr>
      
          {
            users.map((item) =>{
              return (
                <tr>
                  <td>{item.provinsi}</td>
                  <td><NumberFormat value={item.kasusPosi}  thousandSeparator={true} displayType={'text'}/></td>
                  <td><NumberFormat value={item.kasusSemb}  thousandSeparator={true} displayType={'text'}/></td>
                  <td><NumberFormat value={item.kasusMeni}  thousandSeparator={true} displayType={'text'}/></td>
                </tr> 
              )
            })
          }
          </table>
          </center> 
     </>
    )
  };
  
export default Provinsi;


