import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid mt-3">
                    <Link className="navbar-brand" to="/home"><h1 style={{ color: "green" }}>FRESH MART</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            <Link className="nav-link" to="/orders">Orders</Link>
                            <Link className="nav-link" to="/addProduct">Admin</Link>
                            <Link className="nav-link" to="/deals">Deals</Link>
                            <Link to='/login'>
                                <button className="btn btn-outline-success ml-5">LOGIN</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;