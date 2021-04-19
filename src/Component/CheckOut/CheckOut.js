import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import CheckoutBody from '../CheckoutBody/CheckoutBody';
import Header from '../Header/Header';

const CheckOut = () => {
    const { productId } = useParams();
    const { value2 } = useContext(UserContext);
    const [checkout, setCheckOut] = value2;
    // console.log(checkout)
    

    useEffect(() => {
        fetch(`https://aqueous-headland-94677.herokuapp.com/checkedProduct/${productId}`)
        .then(res => res.json())
        .then(data => setCheckOut(data[0]))
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
                            <CheckoutBody item={checkout}></CheckoutBody>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;