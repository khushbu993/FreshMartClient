import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Order = () => {

    const { value1, value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const [checkout, setCheckOut] = value2;
    console.log(checkout)


    const [order, setorder] = useState({
        userName: "",
        userEmail: "",
        bookName: "",
        authorName: "",
        quantity: 1,
        totalPrice: "",
        orderTime: ""
    });

    const placeOrder = () => {
        const newOrder = {
            userName: loggedInUser.name,
            userEmail: loggedInUser.email,
            name: checkout.name,
            quantity: checkout.quantity,
            price: checkout.price,
            totalPrice: checkout.price,
            orderTime: new Date()
        }
        setCheckOut(newOrder)

        fetch('https://aqueous-headland-94677.herokuapp.com//addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order placed successfully');
                }
            })

}
return (
    <div className="container">
        <Header></Header>
        <div className="row">
            <div className="col-md-12">
                <p>Client Name : {loggedInUser.name} </p>
                <p>Client Email : {loggedInUser.email} </p>
                <p>name : {checkout.name} </p>
                <p>quantity : {checkout.quantity} </p>
                <h5>Total Price : {checkout.price} </h5>
            </div>
            <button className="btn btn-warning" onClick={placeOrder}>Confirm Order</button>
        </div>
    </div>
);

    };

export default Order;