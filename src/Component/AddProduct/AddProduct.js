import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './AddProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faHome, faPlusSquare, faTh } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState();
    
    //handle form submit
    const onSubmit = data => {
        const eventData = {
            name: data.name, 
            quantity: data.quantity,
            price: data.price,
            imageURL: imageURL
        }
        const url = `https://aqueous-headland-94677.herokuapp.com/addProduct`;
        console.log(data);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response'))
    };
    //handle image file upload
    const handleImageUpload = event => {
        // console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '2e5753eda41a3df3674065d5f53a3c91');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
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
                <h4>Add Product</h4>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-field">
                        <div class="mb-3">
                            <label for="productName" class="form-label">Product Name</label>
                            <input name="name" type="text" class="form-control" id="productName" placeholder="Enter Product Name" ref={register}/>
                        </div>

                        <div class="mb-3">
                            <label for="productQuantity" class="form-label">Quantity</label>
                            <input name="quantity" type="number" class="form-control" id="productQuantity" placeholder="Enter Product Quantity" ref={register}/>
                        </div>

                        <div class="mb-3">
                            <label for="productPrice" class="form-label">Product Price</label>
                            <input name="price" type="number" class="form-control" id="productPrice" placeholder="Enter Product Price" ref={register}/>
                        </div>

                        <div class="mb-3">
                            <label for="formFile" class="form-label">Upload Product Photo</label>
                            <input name="imageURL" class="form-control" type="file" id="formFile" onChange={handleImageUpload}/>
                        </div>
                    </div>
                    <div class="submit-btn col-md-9 d-flex justify-content-end">
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;