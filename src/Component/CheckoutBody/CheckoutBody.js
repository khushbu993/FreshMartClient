import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutBody = (props) => {
    const { name, quantity, price } = props.item;
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{quantity} KG</td>
                <td>{price}/= TAKA</td>
            </tr>
            <tr>
                <th scope="col">Total</th>
                <th scope="col"> </th>
                <th scope="col">{price}/= TAKA</th>
            </tr>
            <Link to='/order'>
                <button className="btn btn-outline-success ml-5 text-center">Checkout</button>
            </Link>
        </tbody>
    );
};

export default CheckoutBody;