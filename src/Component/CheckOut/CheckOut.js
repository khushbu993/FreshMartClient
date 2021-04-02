import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutBody from '../CheckoutBody/CheckoutBody';
import Header from '../Header/Header';

const CheckOut = () => {
    const { productId } = useParams();
    const [checkout, setCheckOut] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/checkedProduct/${productId}`)
        .then(res => res.json())
        .then(data => setCheckOut(data))
    }, [])
    return (
        <div className="container">
            <Header></Header>
            <div className="row">
                <div className="col-md-8">
                    <h1>Checkout</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Description</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        {
                            checkout.map(item => <CheckoutBody item={item}></CheckoutBody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;