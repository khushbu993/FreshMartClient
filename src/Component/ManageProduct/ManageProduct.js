import React, { useEffect, useState } from 'react';
import './ManageProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faHome, faPlusSquare, faTh } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import TableBody from '../TableBody/TableBody';

const ManageProduct = () => {
    const [manageProducts, setManageProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setManageProducts(data))
    }, [])
    return (
        <div className="row panel">
            <div className="left-panel col-md-3">
                <h3>FRESH MART</h3>
                <div className="navbar-nav add-product">
                    <Link className="nav-link menu" to="/home">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                    <Link className="nav-link menu" to="/manageProduct">
                        <FontAwesomeIcon icon={faTh} /> Manage Product
                    </Link>
                    <Link className="nav-link menu" to="/addProduct">
                        <FontAwesomeIcon icon={faPlusSquare} /> Add Product
                    </Link>
                    <Link className="nav-link menu" to="/editProduct">
                        <FontAwesomeIcon icon={faEdit} /> Edit Product
                    </Link>
                </div>
            </div>
            <div className="right-panel col-md-9">
                <h4>Manage Product</h4>
                <table class="table table-borderless">
                    <thead>
                        <tr className="text-center">
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        manageProducts.map(manageProduct => <TableBody manageProduct={manageProduct}></TableBody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;