import React, {components, useEffect, useState} from 'react'
import axios from 'axios';
import Card from '../../components/Card';
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
      <h2><center>Provinsi Data </center></h2>
  <center> <table border="2"> 
        <tr>
          <td>Provinsi</td>
          <td>Kasus Positif</td>
          <td>Kasus Sembuh</td>
        </tr>
      
          {
            users.map((item) =>{
              return (
                <tr>
                  <td>{item.provinsi}</td>
                  <td><NumberFormat value={item.kasusPosi}  thousandSeparator={true} displayType={'text'}/></td>
                  <td><NumberFormat value={item.kasusSemb}  thousandSeparator={true} displayType={'text'}/></td>
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


