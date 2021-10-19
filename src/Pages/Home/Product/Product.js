import React from 'react';
import { useHistory } from 'react-router';
// import { useHistory } from 'react-router-dom';

const Product = ({ product }) => {
    const {id, price, name, image } = product
    const history = useHistory();
    
    const url=`/product/${id}`
    const handlePlaceOrder = () => {
        history.push(url)
      
    }
    return (
        <div className="col-md-4 col-sm-6 col-12">
            
            <div className="card h-100">
            <img className="image-thumbnail w-100" src={image} alt="" />
                <div className="card-body">
                <h3>{name}</h3>
                    <p> price:{price}</p>
                  
                    
                <button onClick={handlePlaceOrder} className="btn btn-primary fw-bolder d-block w-100"
                >Order Now
                </button>
                
            
            </div>
           </div>
        </div>
    );
};

export default Product;
/* 
import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {id, title, image } = service
    const url = `/booking/${id}`;
    return (
        <div className="col-md-4 col-sm-6 col-12">
            
            <div className="card h-100">
            <img className="image-thumbnail w-100" src={image} alt="" />
                <div className="card-body">
                <h3>{title}</h3>
                    
                    <Link to={url}>
                <button className="btn btn-primary fw-bolder d-block w-100"
                >Book {title.toLowerCase()}
                </button>
                </Link>
            
            </div>
           </div>
        </div>
    );
};

export default Service;
*/