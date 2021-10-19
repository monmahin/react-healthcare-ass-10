import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Directory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div id="directory" className="container">
        <br />
        
            <h1 className="text-primary my-5">Our Products {products.length}</h1>
        <div className="row g-5">
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }
        </div>
    </div>
    );
};

export default Directory;
