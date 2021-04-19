import React, { useEffect, useState } from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import SingleProduct from '../SingleProduct/SingleProduct';


const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://aqueous-headland-94677.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        setLoading(true)
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    loading ? (products.map(product => <SingleProduct product={product} ></SingleProduct>)) :
                        (<span className="spinner"><FontAwesomeIcon icon={faSync} /> Loading...</span>)
                }
            </div>
        </div>
    );
};

export default Products;