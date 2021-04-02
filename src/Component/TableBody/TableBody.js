import React from 'react';
import './TableBody.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TableBody = (props) => {
    const {name, quantity, price, _id} = props.manageProduct;
    const deleteEvent = _id => {
        fetch('/deleteProduct/${_id}', {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully')
        })
    }
    return (
        <tbody>
            <tr className="text-center">
                <td>{name}</td>
                <td>{quantity} KG</td>
                <td>{price}/= TAKA</td>
                <td>
                    <button className="fa-edit-icon btn btn-outline-info"><FontAwesomeIcon icon={faEdit} /></button>
                    <button className="fa-delete-icon btn btn-outline-info" onClick={() => deleteEvent(_id)}><FontAwesomeIcon icon={faTrash} /></button>
                </td>
            </tr>
        </tbody>
    );
};

export default TableBody;