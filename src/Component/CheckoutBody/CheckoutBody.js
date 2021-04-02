import React from 'react';

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
        </tbody>
    );
};

export default CheckoutBody;