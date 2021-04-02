import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const {imageURL, name, price, _id} = props.product;
    return (
        <div className="col-md-4">
            <div class="single-product card">
                <img src={imageURL} class="card-img-top" alt="" />
                <div class="card-body">
                    <h3>{name}</h3>
                    <div className="d-flex justify-content-between mt-5">
                        <span className="price"><h4>{price}/= TK</h4></span>
                        <Link to={`/checkOut/${_id}`}>
                            <button type="button" class="btn btn-success">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;