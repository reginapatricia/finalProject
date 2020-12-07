import React from 'react';

const Card = ({provinsi, kasusPositif,kasusSembuh}) =>{
    return (
        <div className="card-container">
            <p>{provinsi}</p>
            <p>Kasus Positif: {kasusPositif}</p>
            <p>Kasus Sembuh: {kasusSembuh}</p>
        </div>
    );
};

export default Card;