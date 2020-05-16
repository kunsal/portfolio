import React from 'react';
import ubamarket from '../images/ubamarket.png';

const Card = ({ title, text, link, linkTitle, image }) => {
  return ( 
      <div className="card" style={{ width:350, marginBottom: 20 }}>
        <img className="card-img-top" src={`../images/${image}`} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{ title }</h4>
          <p className="card-text">{ text }</p>
          <a href={ link } className="btn btn-brand" target="_blank">
            <span>{ linkTitle }</span>
          </a>
        </div>
      </div>
   );
}
 
export default Card;